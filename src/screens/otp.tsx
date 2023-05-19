import { View, Text,ScrollView,StatusBar ,TextInput,TouchableOpacity, Alert, StyleSheet} from 'react-native'
import React, { useState} from 'react'
import { color } from '../theme/colors';
import { NavigationProp} from '@react-navigation/native';
import { GlobalStyle } from '../assets/styles/globalstyles';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import GoBack from '../components/goBack';

type RootStackParamList = {
    jobType: undefined;
  };
  type MyComponentProps ={
    navigation: NavigationProp<RootStackParamList,'jobType'>;
  }

const Otp:React.FC<MyComponentProps>=({navigation})=> {
  const email = useSelector((state:RootState)=>state.userReducer.email)

    const [otpNumber,SetOtpNumber]=useState<number>()

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
    <ScrollView style={GlobalStyle.screenContainer} contentContainerStyle={{ alignItems: 'center' }}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'}/>
      <GoBack/>
      <Text style={GlobalStyle.screenHeader}>Enter OTP</Text>
        <Text style={GlobalStyle.screenSubHeader}>We have just sent you 4 digit code via your email 
          <Text style={{color:'black'}}>{email}</Text>
        </Text>
        <TextInput onChangeText={(val)=>{SetOtpNumber(Number(val))}} 
        value={otpNumber?.toString()} keyboardType='numeric' maxLength={4} 
        style={[GlobalStyle.input,{textAlign:'center'}]}/>
        <TouchableOpacity style={[GlobalStyle.social,styles.email]} onPress={handleOtp}>
          <Text style={[GlobalStyle.bold,{color:color.secondary,fontSize:16}]}>Continue with Email</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
        <Text style={[styles.S16,{color:'gray',marginTop:24}]}>Didn’t receive code? </Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={[styles.S16,{color:color.primary}]} >Resend Code</Text>
        </TouchableOpacity>
        </View>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  email:{
    borderWidth:0,
    backgroundColor:color.primary,
    marginTop:40
  },
  S16:{
    fontFamily:"JSSemi",
    fontSize:16
  }
})

export default Otp