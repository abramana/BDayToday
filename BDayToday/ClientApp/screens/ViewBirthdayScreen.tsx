import React, {useEffect} from 'react';
import {View} from "react-native";
import {getBirthdayById, updateBirthday} from "../services/BirthdayService";
import BirthdayDetailComponent from "../components/BDayDetail/BirthdayDetailComponent";
import {Button} from "react-native-paper";
import {BirthdayDetail} from "../models/birthday-detail";

interface ViewBirthdayScreenProps {
    route: {
        params: {
            birthdayId: number;
        };
    }
}

const ViewBirthdayScreen = ({ route }: ViewBirthdayScreenProps) => {
    const {birthdayId} = route.params;
    const [birthdayDetail, setBirthdayDetail] = React.useState<BirthdayDetail>();

    useEffect(() => {
        getBirthdayById(birthdayId)
            .then(birthdayDetail => setBirthdayDetail(birthdayDetail))
            .catch(err => console.log(err))
    }, []);

    const handleSave = async () => {
        if (birthdayDetail) {
            await updateBirthday(birthdayDetail);
        }
    };
    
    const handleBirthdayDetailChange = (birthdayDetail: BirthdayDetail) => {
        setBirthdayDetail(birthdayDetail);
    }

    return (
        <View key={birthdayId}>
            {birthdayDetail &&
                <BirthdayDetailComponent birthdayDetail={birthdayDetail} onBirthdayDetailChange={handleBirthdayDetailChange}/>
            }
            <Button mode="contained" onPress={handleSave} disabled={!birthdayDetail || !birthdayDetail?.name || !birthdayDetail?.birthdate}> Save </Button>
        </View>
    );
};

export default ViewBirthdayScreen;