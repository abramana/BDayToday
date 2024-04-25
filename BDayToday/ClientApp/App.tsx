import CreateBirthdayScreen from "./screens/CreateBirthdayScreen";
import ListBirthdaysScreen from "./screens/ListBirthdaysScreen";
import ViewBirthdayScreen from "./screens/ViewBirthdayScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {customTheme} from "./theme/customTheme";
import {fonts} from "./theme/fonts";
import {useFonts} from "expo-font";

export type RootStackParamList = {
    ListBirthdaysScreen: undefined,
    CreateBirthdayScreen: undefined;
    ViewBirthdayScreen: { birthdayId: number };
};
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

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
                    <Stack.Screen name="ListBirthdaysScreen" component={ListBirthdaysScreen}/>
                    <Stack.Screen name="CreateBirthdayScreen" component={CreateBirthdayScreen}/>
                    <Stack.Screen name="ViewBirthdayScreen" component={ViewBirthdayScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}