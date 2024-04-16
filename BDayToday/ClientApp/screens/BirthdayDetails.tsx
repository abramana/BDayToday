import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {Text} from 'react-native-paper';
import {getBirthdayById} from "../services/BirthdayService";
import {Birthday} from "../models/birthday";

interface Props {
    route: {
        params: {
            index: number;
        };
    };
}

const BirthdayDetails = ({route}: Props) => {
    const {index} = route.params;
    const [birthday, setBirthday] = useState<Birthday | undefined>();

    useEffect(() => {
        getBirthdayById(index)
            .then(birthday => setBirthday(birthday))
            .catch(err => console.log(err))
    }, []);

    return (
        <View key={index}>
            {birthday &&
                <Text variant={"displayMedium"}>
                    {birthday.name} - {birthday.birthdate.toLocaleDateString()}</Text>
            }
        </View>
    );
};

export default BirthdayDetails;