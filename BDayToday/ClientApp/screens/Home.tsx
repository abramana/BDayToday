import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../App";
import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Button, Searchbar, Text} from "react-native-paper";
import BDaysList from "../components/BDaysList/BDaysList";
import React from "react";

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Home'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const Home = ({navigation}: Props) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <View style={{alignItems: "center"}}>
            <StatusBar style="auto"/>
            <Text variant={"displayLarge"}>Birthday List</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={handleSearch}
                value={searchQuery}
                style={{width: 350, marginBottom: 10}}
            />
            <Button mode="contained" onPress={() => navigation.navigate('NewBirthday')} style={{width: 150}}>
                Add new
            </Button>
            <BDaysList searchQuery={searchQuery} navigation={navigation}></BDaysList>
        </View>
    )
}

export default Home