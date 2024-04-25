import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Button, Searchbar, Text} from "react-native-paper";
import ListBirthdaysComponent from "../components/BDaysList/ListBirthdaysComponent";
import React from "react";
import {NavigationProps} from "../App";


interface ListBirthdaysScreenProps {
    navigation: NavigationProps;
}
const ListBirthdaysScreen = ({navigation}: ListBirthdaysScreenProps) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = (query: string) => setSearchQuery(query);

    return (
        <View style={{alignItems: "center"}}>
            <StatusBar style="auto"/>
            <Text variant={"displayLarge"}>BDay Today!</Text>
            <Searchbar placeholder="Search" onChangeText={handleSearch} value={searchQuery} style={{width: 350, marginBottom: 10}}/>
            <Button mode="contained" onPress={() => navigation.navigate('CreateBirthdayScreen')} style={{width: 150}}>Add new</Button>
            <ListBirthdaysComponent searchQuery={searchQuery} navigation={navigation}></ListBirthdaysComponent>
        </View>
    )
}

export default ListBirthdaysScreen;