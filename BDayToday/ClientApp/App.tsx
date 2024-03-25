import NewBirthday from "./screens/NewBirthday";
import Home from "./screens/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import {theme} from "./theme/theme";
import {fonts} from "./theme/fonts";
import {useFonts} from "expo-font";

export type RootStackParamList = {
    Home: undefined, // undefined because we aren't passing any params to the home screen
    NewBirthday: undefined;
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
        <PaperProvider theme={{...theme, fonts}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen name="NewBirthday" component={NewBirthday}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}


