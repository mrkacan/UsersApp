import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as moviesAction from '../features/movies/actions';
import ListView from "../components/ListView";
import {getUsersSelector} from "../features/movies/selectors";
import {useNavigation} from "@react-navigation/native";
import Button from '../components/Button';

export default function Users() {
    const dispatch = useDispatch();
    const {data} = useSelector(getUsersSelector);
    useEffect(() => {
        dispatch(moviesAction.getUsers());
    }, [])

    const onUserAddPress = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <ListView data={data}/>
            <Button onPress={onUserAddPress}>Add User</Button>
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
