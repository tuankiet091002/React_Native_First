import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import useResultDetail from "../hooks/useResultDetail";

function ResultShowScreen({ route }) {
    const [searchApi, result, errorMessage] = useResultDetail();

    const { id } = route.params;

    useEffect(() => {
        searchApi(id);
    }, []);

    if (!result) return null;

    return (
        <View>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )}
            />
        </View>
    );
}

export default ResultShowScreen;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
    }
});

ResultShowScreen.propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
};
