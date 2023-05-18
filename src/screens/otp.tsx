import { View, Text,ScrollView,StatusBar ,TextInput,TouchableOpacity, Alert} from 'react-native'
import React, { useState,useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { color } from '../theme/colors';
import { NavigationProp,RouteProp } from '@react-navigation/native';
import { GlobalStyle } from '../assets/styles/globalstyles';
import { useDispatch,useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setEmail } from '../redux/actions';

import { RootState } from '../redux/store';

type RootStackParamList = {
    jobType: undefined;
    
    
    // Add any other screens here
  };
  type MyComponentProps ={
    navigation: NavigationProp<RootStackParamList,'jobType'>;
    // Replace {} with your navigator's params type
  }

const Otp:React.FC<MyComponentProps>=({navigation})=> {
  // const [email,setEmail]=useState('')
  const email = useSelector((state:RootState)=>state.userReducer.email)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem('@User');
  //       const storedPeople = jsonValue != null ? JSON.parse(jsonValue) : [];
  //       console.log(storedPeople)
  //       setEmail(storedPeople.email)
        
  //     } catch(e) {
  //       console.log(e);
  //     }
  //   }
  //   getData();
  // }, []);
    
    const [otpNumber,SetOtpNumber]=useState<number>()

    const GoBack=()=>{
        console.log('back')
        navigation.goBack()
      }
    const handleOtp=()=>{
        if(otpNumber){
            console.log('handleOtp')
            navigation.navigate('jobType')
        }
        else(
            Alert.alert('Kindly enter the 4 digits','',[{text:'OK'}])
        )
    }
    const handleResend=()=>{
        Alert.alert('Kindly check your email','',[{text:'OK'}])
    }


  return (
    <ScrollView style={{paddingTop:32,paddingHorizontal:30,backgroundColor:color.secondary,flex:1,}} contentContainerStyle={{ alignItems: 'center' }}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'}/>
      <Ionicons name="arrow-back-sharp" size={32} color="black" style={{left:-150}} onPress={GoBack}/>
      <Text style={{textAlign:'center',fontFamily:'JSBold',fontSize:24,marginVertical:8,paddingTop:10}}>Enter OTP</Text>
        <Text style={[GlobalStyle.text,{textAlign:'center',paddingBottom:30,fontSize:16,color:'gray'}]}>We have just sent you 4 digit code via your email <Text style={{color:'black'}}>{email}</Text></Text>
        <TextInput onChangeText={(val)=>{SetOtpNumber(Number(val))}} value={otpNumber?.toString()} keyboardType='numeric' maxLength={4} style={[GlobalStyle.input,{textAlign:'center'}]}/>
        <TouchableOpacity style={[GlobalStyle.button,{borderWidth:0,backgroundColor:color.primary,marginTop:40}]} onPress={handleOtp}>
          <Text style={[GlobalStyle.bold,{color:color.secondary,fontSize:16}]}>Continue with Email</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'gray',fontSize:16,fontFamily:"JSSemi",paddingTop:24}}>Didn’t receive code? </Text><TouchableOpacity onPress={handleResend}><Text style={{color:color.primary,fontFamily:"JSSemi",fontSize:16,marginTop:24}} >Resend Code</Text></TouchableOpacity>
        </View>
        
    </ScrollView>
  )
}

export default Otp