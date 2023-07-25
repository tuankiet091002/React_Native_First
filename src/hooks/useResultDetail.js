import { useCallback, useEffect, useState } from "react";

import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = useCallback(async (id) => {
        try {
            const response = await yelp.get(`/${id}`);

            setResults(response.data);
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    });

    return [searchApi, results, errorMessage];
};
