import React, {ReactNode, useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import {Text} from 'react-native-paper';
import {styles} from "./Style";
import {Birthday} from "../../models/birthday";
import {getAllBirthdays} from "../../services/BirthdayService";
import {NavigationProps} from "../../App";
import {useFocusEffect} from "@react-navigation/native";

interface ListBirthdaysComponentProps {
    searchQuery: string;
    navigation: NavigationProps;
}

export default function ListBirthdaysComponent({navigation, searchQuery}: ListBirthdaysComponentProps): ReactNode {
    const [birthdays, setBirthdays] = useState<Birthday[]>([]);
    const [filteredBirthdays, setFilteredBirthdays] = useState<Birthday[]>([]);

    const handleBirthdayView = (birthday: Birthday) => navigation.navigate('ViewBirthdayScreen', {birthdayId: birthday.id});

    useFocusEffect(
        React.useCallback(() => {
            getAllBirthdays()
                .then(birthdays => setBirthdays(birthdays))
                .catch(err => console.log(err));
        }, [])
    );

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
                    <Text variant={"displayMedium"} onPress={() => handleBirthdayView(birthday)}>
                        {birthday.name} - {birthday.birthdate?.toLocaleDateString()} </Text>
                </View>
            ))}
        </ScrollView>
    );
}