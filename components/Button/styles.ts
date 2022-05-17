import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: "#FFF"
    },
    buttonWrapper: {
        backgroundColor: "#088ab9",
        marginHorizontal: 10,
        paddingVertical: 15,
        alignItems:"center",
        borderRadius: 10,
    },
});

export default styles;
