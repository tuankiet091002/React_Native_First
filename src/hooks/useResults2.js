// use this snippet to replace the contents of src\hooks\useResults.js if you debug using web browser:

import { useCallback, useEffect, useState } from "react";

const apiKey =
    "0TXwhjYXXvRg_cJof08hl_oJRIwpmPs6qtXs0uLTEKGyFMKfkwllj3-2g1H4bgC65-6_zFJVERWal0gNBMn64PRGpZ6BQMOxw6JKs_lC3lDb2QEbn9Xh-ReeY42-ZHYx";

const useResults = () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = useCallback(async (term, location) => {
        try {
            const response = await fetch(
                `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=50`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );
            const json = await response.json();

            setResults(json.businesses);
        } catch (err) {
            setErrorMessage("Something went wrong");
            console.log(err);
        }
    }, []);

    useEffect(() => {
        searchApi("pasta", "san jose");
    }, []);

    return [searchApi, results, errorMessage];
};

export default useResults;
