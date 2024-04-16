import NewBirthday from "./screens/NewBirthday";
import Home from "./screens/Home";
import BirthdayDetails from "./screens/BirthdayDetails";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {customTheme} from "./theme/customTheme";
import {fonts} from "./theme/fonts";
import {useFonts} from "expo-font";

export type RootStackParamList = {
    Home: undefined,
    NewBirthday: undefined;
    BirthdayDetails: { index: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    useFonts({
        'LibreBodoni-Bold': require('./assets/fonts/LibreBodoni-Bold.ttf'),
        'LibreBodoni-BoldItalic': require('./assets/fonts/LibreBodoni-BoldItalic.ttf'),
        'LibreBodoni-Italic': require('./assets/fonts/LibreBodoni-Italic.ttf'),
        'LibreBodoni-Regular': require('./assets/fonts/LibreBodoni-Regular.ttf'),
    });
    return (
        <PaperProvider theme={{...customTheme, fonts}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen name="NewBirthday" component={NewBirthday}/>
                    <Stack.Screen name="BirthdayDetails" component={BirthdayDetails}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}