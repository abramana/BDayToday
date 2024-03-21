import axios from "axios";
import {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";

export default function ScrollViewBDays() {
        const [birthdays, setBirthdays] = useState([]);

        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5294/birthday');
                if (Array.isArray(response.data)) {
                    setBirthdays(response.data);
                } else {
                    console.error('Unexpected data format received from the server');
                }            
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        return (
            <ScrollView style={styles.scrollView}>
                {birthdays.map((birthday, index) => (
                    <View key={index}>
                        <Text style={styles.text}>{birthday.name} {birthday.birthdayDate}</Text>
                    </View>
                ))}
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    text: {
        marginTop: 5,
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#C45C1B',
    },
    scrollView: {
        marginHorizontal: 20,
        marginTop: 300,
        maxHeight: 150,
    }
});