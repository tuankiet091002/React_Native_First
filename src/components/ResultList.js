import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";

import ResultDetail from "./ResultDetail";

function ResultList({ title, results }) {
    const navigation = useNavigation();

    if (!results.length) return null;

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() =>
                            navigation.navigate("ResultShow", {
                                id: item.id,
                                name: item.name
                            })
                        }
                        style={({ pressed }) => pressed && { opacity: 0.5 }}
                    >
                        <ResultDetail result={item} />
                    </Pressable>
                )}
            />
        </View>
    );
}

export default ResultList;

const styles = StyleSheet.create({
    title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: "bold",
    },
    container: {
        marginBottom: 10,
    },
});

ResultList.propTypes = {
    title: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
};
