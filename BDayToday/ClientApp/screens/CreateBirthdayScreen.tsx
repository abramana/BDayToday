import React from "react";
import {View} from "react-native";
import {Button, Text} from 'react-native-paper';
import {createBirthday} from "../services/BirthdayService";
import BirthdayDetailComponent from "../components/BDayDetail/BirthdayDetailComponent";
import {BirthdayDetail, emptyBirthdayDetail} from "../models/birthday-detail";

const CreateBirthdayScreen = () => {
    const [birthdayDetail, setBirthdayDetail] = React.useState<BirthdayDetail>(emptyBirthdayDetail());
    const handleSave = async () => await createBirthday(birthdayDetail!);

    const handleBirthdayDetailChange = (birthdayDetail: BirthdayDetail) => setBirthdayDetail(birthdayDetail)

    return (
        <View>
            <Text variant={"displayLarge"}>BDay everyday!</Text>
            <BirthdayDetailComponent birthdayDetail={birthdayDetail} onBirthdayDetailChange={handleBirthdayDetailChange}></BirthdayDetailComponent>
            <Button mode="contained" onPress={handleSave} disabled={!birthdayDetail.name || !birthdayDetail.birthdate}>
                Save
            </Button>
        </View>
    )
};

export default CreateBirthdayScreen;