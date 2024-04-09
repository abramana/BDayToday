import React from "react";
import {View} from "react-native";
import {DatePickerInput} from 'react-native-paper-dates';
import {Button, TextInput} from 'react-native-paper';
import {createBirthday} from "../services/CreateBirthday";

type NewBirthdayProps = {}
const NewBirthday = (props: NewBirthdayProps) => {
    const [name, setName] = React.useState<string>('');
    const [birthdate, setBirthdate] = React.useState<Date | undefined>(undefined);

    const handleSave = async () => {
        try {
            if (!birthdate) {
                // Handle undefined
                alert("Birthdate is undefined! Finish the validations already!!!");
                return;
            }
            const response = await createBirthday(name, birthdate);
        } catch (error) {
            console.error('Error creating birthday:', error);
        }
    };

    return (
        <View>
            <TextInput label="Name" value={name} onChangeText={setName}/>
            <DatePickerInput
                locale="cz-CS"
                label="Birthdate"
                value={birthdate}
                onChange={(date) => setBirthdate(date)}
                inputMode="start"
            />
            <Button mode="contained" onPress={handleSave}>
                Save
            </Button>
        </View>
    )
}

export default NewBirthday