import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../App";
import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Button, Text} from "react-native-paper";
import BDaysList from "../components/ScrollView/BDaysList";
import React from "react";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Home'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const Home = ({navigation}: Props) => {

    return (
        <View>
            <Text variant={"displayLarge"}>Birthday List</Text>
            <StatusBar style="auto"/>
            <BDaysList></BDaysList>
            <Button mode="contained" onPress={() => navigation.navigate('NewBirthday')}>
                Add new
            </Button>
        </View>
    )
}

export default Home