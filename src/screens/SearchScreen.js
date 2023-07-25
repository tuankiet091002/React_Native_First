import { useState } from "react";
import { ScrollView, Text } from "react-native";

import ResultList from "../components/ResultList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

function SearchScreen() {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) =>
        results.filter((result) => result.price === price);

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList
                    title="Cost Effective"
                    results={filterResultsByPrice("$")}
                />
                <ResultList
                    title="Bit Pricier"
                    results={filterResultsByPrice("$$")}
                />
                <ResultList
                    title="Big Spender"
                    results={filterResultsByPrice("$$$")}
                />
            </ScrollView>
        </>
    );
}

export default SearchScreen;
