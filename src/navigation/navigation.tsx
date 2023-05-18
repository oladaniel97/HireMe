import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react'
import { LoadingScreen } from "../screens/loading";
import Onboarding from "../screens/onboarding";
import Signup from "../screens/signup";
import Signup2 from "../screens/signup2";
import Login from "../screens/login";
import Otp from "../screens/otp";
import JobType from "../screens/jobtype";
import Specialization from "../screens/specialization"

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="loading" component={LoadingScreen} />
            <Stack.Screen name="onboarding" component={Onboarding}/>
            <Stack.Screen name="signup" component={Signup}/>
            <Stack.Screen name="signup2" component={Signup2}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="otp" component={Otp}/>
            <Stack.Screen name="jobType" component={JobType}/>
            <Stack.Screen name="specialization" component={Specialization}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}