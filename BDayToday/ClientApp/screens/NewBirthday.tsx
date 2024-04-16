import React from "react";
import {View} from "react-native";
import {DatePickerInput} from 'react-native-paper-dates';
import {Button, HelperText, Text, TextInput} from 'react-native-paper';
import {createBirthday} from "../services/BirthdayService";

type NewBirthdayProps = {}
const NewBirthday = (props: NewBirthdayProps) => {
    const [name, setName] = React.useState<string | undefined>(undefined);
    const [birthdate, setBirthdate] = React.useState<Date | undefined>(undefined);

    const handleSave = async () => {
        await createBirthday(name!, birthdate!);
    };

    return (
        <View>
            <Text variant={"displayLarge"}>BDay everyday!</Text>
            <TextInput label="Name" value={name} onChangeText={setName} maxLength={70}/>
            <HelperText type="error" visible={!name}>
                Name is required
            </HelperText>
            <DatePickerInput
                locale="cz-CS"
                label="Birthdate"
                value={birthdate}
                onChange={(date) => setBirthdate(date)}
                inputMode="start"
                style={{width: 500}}
            />
            <HelperText type="error" visible={!birthdate}>
                Birthdate is required
            </HelperText>
            <Button mode="contained" onPress={handleSave} disabled={!name || !birthdate}>
                Save
            </Button>
        </View>
    )
}

export default NewBirthday