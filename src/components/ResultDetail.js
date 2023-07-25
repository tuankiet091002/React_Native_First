import { Image, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

function ResultDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Star, {result.review_count} Reviews
            </Text>
        </View>
    );
}

export default ResultDetail;

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        marginBottom: 5,
        borderRadius: 4,
    },
    name: {
        fontWeight: "bold",
    },
});

ResultDetail.propTypes = {
    result: PropTypes.objectOf(PropTypes.any).isRequired,
};
