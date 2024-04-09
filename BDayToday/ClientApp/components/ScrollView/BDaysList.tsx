import {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import {Text} from 'react-native-paper';
import {styles} from "./Style";
import {Birthday} from "../../models/birthday";
import {getAllBirthdays} from "../../services/GetAllBirthdays";

export default function BDaysList() {
    const [birthdays, setBirthdays] = useState<Birthday[]>([]);

    useEffect(() => {
        getAllBirthdays()
            .then((response) =>
                response.data.map((el: any) =>
                    ({
                        name: el.name,
                        birthdate: new Date(el.birthdate)
                    })))
            .then(birthdays => setBirthdays(birthdays))
            .catch(err => console.log(err))
    }, []);

    return (
        <ScrollView style={styles.scrollView}>
            {birthdays.map((birthday, index) => (
                <View key={index}>
                    <Text variant={"displayMedium"}>{birthday.name} - {birthday.birthdate.toLocaleDateString()}</Text>
                </View>
            ))}
        </ScrollView>
    );
}