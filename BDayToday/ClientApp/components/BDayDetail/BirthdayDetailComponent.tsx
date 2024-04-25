import {HelperText, TextInput} from "react-native-paper";
import React from "react";
import {View} from "react-native";
import {DatePickerInput} from "react-native-paper-dates";
import {BirthdayDetail} from "../../models/birthday-detail";

interface BDayDetailComponentProps {
    birthdayDetail: BirthdayDetail;
    onBirthdayDetailChange: (birthdayDetail: BirthdayDetail) => void;
}
const BirthdayDetailComponent = (props: BDayDetailComponentProps) => {
    const handleNameChange = (val: string) => props.onBirthdayDetailChange({...props.birthdayDetail, name: val});
    const handleDateChange = (date: Date | undefined) => props.onBirthdayDetailChange({...props.birthdayDetail, birthdate: date});

    return (
        <View>
            <TextInput label="Name" value={props.birthdayDetail.name} onChangeText={handleNameChange} maxLength={70}/>
            <HelperText type="error" visible={!props.birthdayDetail.name || props.birthdayDetail.name?.trim() == ""}>
                Name is required
            </HelperText>
            <DatePickerInput
                locale="cz-CS"
                label="Birthdate"
                value={props.birthdayDetail.birthdate}
                onChange={handleDateChange}
                inputMode="start"
                style={{width: 200}}
            />
            <HelperText type="error" visible={!props.birthdayDetail.birthdate}>
                Birthdate is required
            </HelperText>
        </View>
    )
};

export default BirthdayDetailComponent;