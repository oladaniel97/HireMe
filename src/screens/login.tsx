import { View, Text,StatusBar, TouchableOpacity, TextInput,ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { color } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyle } from '../assets/styles/globalstyles';
import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  signup: undefined;
  // Add any other screens here
};
type MyComponentProps ={
  navigation: NavigationProp<RootStackParamList,'signup'>; // Replace {} with your navigator's params type
}

 const Login:React.FC<MyComponentProps>=({navigation}) =>{
  const [email,SetEmail] = useState<String>('')

  const handleLogin=()=>{
    console.log('login')
    navigation.navigate('signup')
  }
  const handleEmail=()=>{
    if (email){
      console.log('email',{email})
    
    }
    else{
      Alert.alert('Invalid Email','Please enter your email address',[{text:'OK'}])
    }
    
  }

  const GoBack=()=>{
    console.log('back')
    navigation.goBack()
  }



  return (
    <ScrollView style={{paddingTop:32,paddingHorizontal:30,backgroundColor:color.secondary,flex:1,}} contentContainerStyle={{ alignItems: 'center' }}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'}/>
      <Ionicons name="arrow-back-sharp" size={32} color="black" style={{left:-150}} onPress={GoBack}/>
      <View>
        <Text style={{textAlign:'center',fontFamily:'JSBold',fontSize:24,marginVertical:8,paddingTop:10}}>Hi, Welcome Back! 👋</Text>
        <Text style={[GlobalStyle.text,{textAlign:'center',paddingBottom:30,fontSize:16,color:'gray'}]}>Lorem ipsum dolor sit amet</Text>
        <TouchableOpacity style={GlobalStyle.button}>
        <AntDesign name="google" size={24} color="blue" />
          <Text style={GlobalStyle.bold}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyle.button}>
        <AntDesign name="apple1" size={24} color="black" />
          <Text style={[GlobalStyle.bold]}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',gap:12,paddingVertical:24}}>
        <View style={{width:62,height:2,backgroundColor:"gray"}}/>
        <Text style={[GlobalStyle.text,{color:'gray'}]}>Or continue with</Text>
        <View style={{width:62,height:2,backgroundColor:"gray"}}/>
      </View>
      <Text style={[GlobalStyle.bold,{left:-150}]}>Email</Text>
      <TextInput onChangeText={(val)=>{SetEmail(val)}} value={email.toString()} placeholder='Enter your email address' style={GlobalStyle.input}/>
      <TouchableOpacity style={[GlobalStyle.button,{borderWidth:0,backgroundColor:color.primary,marginTop:40}]} onPress={handleEmail}>
          <Text style={[GlobalStyle.bold,{color:color.secondary,fontSize:16}]}>Continue with Email</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{color:'gray',fontSize:16,fontFamily:"JSSemi",paddingTop:24}}>Already have an account?</Text><TouchableOpacity onPress={handleLogin}><Text style={{color:color.primary,fontFamily:"JSSemi",fontSize:16,marginTop:24}} > Signup</Text></TouchableOpacity>
        </View>
        
    </ScrollView>
  )
}

export default Login