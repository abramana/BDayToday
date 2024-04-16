import React, {ReactNode, useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import {Text} from 'react-native-paper';
import {styles} from "./Style";
import {Birthday} from "../../models/birthday";
import {getAllBirthdays} from "../../services/BirthdayService";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Home'
>;

interface Props {
    searchQuery: string;
    navigation: ProfileScreenNavigationProp;
}

export default function BDaysList({navigation, searchQuery}: Props): ReactNode {
    const [birthdays, setBirthdays] = useState<Birthday[]>([]);
    const [filteredBirthdays, setFilteredBirthdays] = useState<Birthday[]>([]);

    const handleBirthdayDetails = (birthday: Birthday) => {
        navigation.navigate('BirthdayDetails', {index: birthday.id});
    };
    useEffect(() => {
        getAllBirthdays()
            .then(birthdays => setBirthdays(birthdays))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        const filtered = birthdays.filter(birthday =>
            birthday.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBirthdays(filtered);
    }, [birthdays, searchQuery]);

    return (
        <ScrollView style={styles.scrollView}>
            {filteredBirthdays.map((birthday, index) => (
                <View key={index}>
                    <Text variant={"displayMedium"} onPress={() => handleBirthdayDetails(birthday)}>
                        {birthday.name} - {birthday.birthdate.toLocaleDateString()} </Text>
                </View>
            ))}
        </ScrollView>
    );
}