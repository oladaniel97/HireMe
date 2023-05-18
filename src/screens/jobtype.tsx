import { View, Text,ScrollView,StatusBar ,TextInput,TouchableOpacity, Alert,Image} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { color } from '../theme/colors';
import { NavigationProp,RouteProp } from '@react-navigation/native';
import { GlobalStyle } from '../assets/styles/globalstyles';

type RootStackParamList = {
    jobType: undefined;
    specialization:undefined
    
    // Add any other screens here
  };
  type MyComponentProps ={
    navigation: NavigationProp<RootStackParamList,'jobType','specialization'>;
     // Replace {} with your navigator's params type
  }

const JobType:React.FC<MyComponentProps>=({navigation})=> {

    const GoBack=()=>{
        console.log('back')
        navigation.goBack()
      }
    const handleSubmit=()=>{
        console.log('handlejoptype')
        navigation.navigate('specialization')
    }


  return (
    <ScrollView style={{paddingTop:32,paddingHorizontal:30,backgroundColor:color.secondary,flex:1,}} contentContainerStyle={{ alignItems: 'center' }}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'}/>
      <Ionicons name="arrow-back-sharp" size={32} color="black" style={{left:-150}} onPress={GoBack}/>
      <Text style={{textAlign:'center',fontFamily:'JSBold',fontSize:24,marginVertical:8,paddingTop:10}}>Choose Job Type</Text>
        <Text style={[GlobalStyle.text,{textAlign:'center',paddingBottom:30,fontSize:16,color:'gray',paddingHorizontal:35,lineHeight:22}]}>Are you looking for a new job or looking for new employee </Text>
        <View style={{flexDirection:'row',gap:10,marginTop:40}}>
            <TouchableOpacity style={{width:170,alignItems:'center',paddingHorizontal:18,paddingVertical:24,borderRadius:24,backgroundColor:'#F0F0F0'}}>
                    <Image source={require('../assets/images/Icon.png')}/>
                    <Text style={{fontFamily:'JSBold',fontSize:16,marginTop:25}}>Find a Job</Text>
                    <Text style={{textAlign:'center',lineHeight:20,fontFamily:'JSRegular',marginTop:8}}>It’s easy to find your dream jobs here with us.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:170,alignItems:'center',paddingHorizontal:18,paddingVertical:24,borderRadius:24,backgroundColor:'#F0F0F0'}}>
                    <Image source={require('../assets/images/icon2.png')} />
                    <Text style={{fontFamily:'JSBold',fontSize:16,marginTop:25}}>Find a employee</Text>
                    <Text style={{textAlign:'center',lineHeight:20,fontFamily:'JSRegular',marginTop:8}}>It’s easy to find employees here with us.</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={[GlobalStyle.button,{borderWidth:0,backgroundColor:color.primary,marginTop:140}]} onPress={handleSubmit}>
            <Text style={[GlobalStyle.bold,{color:color.secondary,fontSize:16}]}>Continue</Text>
        </TouchableOpacity>
        
    </ScrollView>
  )
}

export default JobType