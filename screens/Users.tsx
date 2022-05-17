import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as moviesAction from '../features/movies/actions';
import ListView from "../components/ListView";
import {getUsersSelector} from "../features/movies/selectors";
import {useNavigation} from "@react-navigation/native";

export default function UsersScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {data, isLoading} = useSelector(getUsersSelector);

    useEffect(()=> {
        dispatch(moviesAction.getUsers());
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate("Modal")} style={styles.searchInputWrapper}>

            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    textInput: {
        fontSize: 15
    },
    searchInputWrapper: {
        width: '100%',
        position: "relative",
        height: 50,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#105067',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    flatListContent: {
        marginTop: 20,
    }
});
