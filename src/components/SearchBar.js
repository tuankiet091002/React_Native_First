import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";

function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                style={styles.inputStyle}
            />
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    backgroundStyle: {
        flexDirection: "row",
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 15,
        borderRadius: 5,
        backgroundColor: "#f0eeee",
        
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    },
});

SearchBar.propTypes = {
    term: PropTypes.string.isRequired,
    onTermChange: PropTypes.func.isRequired,
    onTermSubmit: PropTypes.func.isRequired,
};
