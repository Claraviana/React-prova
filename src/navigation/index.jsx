import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SplashScreen } from "../screens/SplashScreen";
const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
    return (
        <NavigationContainer> 
            <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Formulário" component={SplashScreen} />
        </Stack.Navigator>
        </NavigationContainer>
        );
};