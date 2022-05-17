import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import {useNavigation} from "@react-navigation/native";


export default function Details() {
    const navigation = useNavigation();

    return <View style={styles.container}>
        <Pressable onPress={navigation.goBack} style={styles.closeButton}>
            <FontAwesome
                name="close"
                size={25}
                color={"#000"}
            />
        </Pressable>
        <Text style={styles.title}>
            Add New User
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    closeButton: {
        position: "absolute",
        right: 10,
        top: 10,
        padding: 20
    },
});
