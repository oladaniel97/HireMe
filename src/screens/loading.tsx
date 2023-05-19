import {View, Image, Text,StatusBar} from "react-native";
import {color} from '../theme/colors'
import { useEffect } from "react";
import { NavigationProp } from '@react-navigation/native';
import {useFonts} from 'expo-font';

type RootStackParamList = {
    onboarding: undefined;
    // Add any other screens here
  };
type MyComponentProps ={
    navigation: NavigationProp<RootStackParamList,'onboarding'>; // Replace {} with your navigator's params type
  }

export const LoadingScreen: React.FC<MyComponentProps> = ({navigation}) => {

    const [loaded] = useFonts({
        JSRegular: require("../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
       JSBold: require('../assets/fonts/PlusJakartaSans-Bold.ttf')
      });
useEffect(()=>{
    if (loaded) {
        setTimeout(() => {
          navigation.replace('onboarding');
        },5000)}
},[loaded, navigation])

    return <View style={{backgroundColor:color.primary,flex:1,alignItems:'center',justifyContent:'center'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={color.primary} />
        <Image source={require('../assets/images/logo.png')} style={{resizeMode:'contain',width:150,height:150}} />
        <Text style={{fontSize:32,color:color.secondary,fontFamily:'JSBold',}}>HireMe</Text>
    </View>
}