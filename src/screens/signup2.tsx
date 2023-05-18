import { View, Text,ScrollView,StatusBar,TextInput, TouchableOpacity, Modal, FlatList,Alert } from 'react-native'
import { color } from '../theme/colors';
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyle } from '../assets/styles/globalstyles';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import countries from "countries-list";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from 'react-redux';
import { setEmail,setFname,setLname,setPw,setCountry } from '../redux/actions';


import { RootState } from '../redux/store';



type RootStackParamList = {
    login: undefined;
    otp: undefined;
    
    // email:{userId:string}
    // Add any other screens here
  };
  type MyComponentProps ={
    navigation: NavigationProp<RootStackParamList,'login'|'otp'>;
    route: RouteProp<RootStackParamList, 'otp'> // Replace {} with your navigator's params type
  }

const Signup2:React.FC<MyComponentProps> = ({navigation,route}) => {

  const {email,fname,lname,pw,country} = useSelector((state:RootState)=>state.userReducer)
  const dispatch = useDispatch()

    const [countryName,Setcountry] = useState<string>('')

    // const countryList = Object.values(countries.countries).map(country => country.name);

    const filteredCountries = Object.values(countries.countries)
    .filter((country) => country.name.toLowerCase().includes(countryName.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

    const [modal,SetModal] = useState(false)

    const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);

    const OpenModal=()=>{
        SetModal(true)
    }

    const CountrySelection=(item:{name:string})=>{
        dispatch(setCountry(item.name))
        SetModal(false)
    }

    const handleLogin=()=>{
        console.log('login')
        navigation.navigate('login')
      }
      const handleEmail=async()=>{
        try {
          if (fname && lname && pw && country){
          const user =[{
            fname:fname,
            lname:lname,
            email:email,
            pw:pw,
            country:country
          }]
          await AsyncStorage.setItem('User',JSON.stringify(user))
          dispatch(setFname(fname))
           dispatch(setLname(lname))
           dispatch(setPw(pw))
           dispatch(setCountry(country))
           navigation.navigate('otp',)}
           else{
            Alert.alert('Invalid','Please fill all fields',[{text:'OK'}])
           }
        } catch (error) {
          Alert.alert('Invalid','Please fill all fields',[{text:'OK'}])
        }
        // if (fname && lname && pw && country){
        //   console.log('values',{fname,lname,pw,country,email})
        //    navigation.navigate('otp',)
        //    dispatch(setFname(fname))
        //    dispatch(setLname(lname))
        //    dispatch(setPw(pw))
        //    dispatch(setCountry(country))
        // }
        // else{
        //   Alert.alert('Invalid','Please fill all fields',[{text:'OK'}])
        // }
      }

    const GoBack=()=>{
        navigation.goBack()
      }

  return (
    
    <ScrollView style={{paddingTop:32,paddingHorizontal:30,backgroundColor:color.secondary,flex:1,}} contentContainerStyle={{ alignItems: 'center' }}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'}/>
      <Ionicons name="arrow-back-sharp" size={32} color="black" style={{left:-150}} onPress={GoBack}/>
      <View>
        <Text style={{textAlign:'center',fontFamily:'JSBold',fontSize:24,marginVertical:8,paddingTop:10}}>Complete your account</Text>
        <Text style={[GlobalStyle.text,{textAlign:'center',paddingBottom:30,fontSize:16,color:'gray'}]}>Lorem ipsum dolor sit amet</Text>
        </View>
        <View>
        <Text style={[GlobalStyle.bold,]}>First Name</Text>
      <TextInput onChangeText={(val)=>{dispatch(setFname(val))}} value={fname} placeholder='Enter your First name' style={GlobalStyle.input}/>
      <Text style={[GlobalStyle.bold,{marginTop:16}]}>Last Name</Text>
      <TextInput onChangeText={(val)=>{dispatch(setLname(val))}} value={lname} placeholder='Enter your Last name' style={GlobalStyle.input}/>
      <Text style={[GlobalStyle.bold,{marginTop:16}]}>Password</Text>
      <View style={[GlobalStyle.input,{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:16}]}>
      <TextInput onChangeText={(val)=>{dispatch(setPw(val))}} value={pw} placeholder='Create a password' secureTextEntry={!isPasswordVisible} style={{fontSize:16,fontFamily:'JSRegular',}} />
      <Feather name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="black" onPress={togglePasswordVisibility}
      />
      </View>
      <TouchableOpacity onPress={OpenModal} style={[GlobalStyle.input,{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:16}]} >
        <TextInput editable={false} placeholder='Choose a Country' style={{fontSize:16,fontFamily:'JSRegular',}} value={country}/>
        <Feather name="chevron-down" size={24} color="gray" />
      </TouchableOpacity>

{/* Modal  */}
      <Modal visible={modal} animationType="slide"  >
        <View style={{marginHorizontal:24}}>
            <View style={{flexDirection:'row',alignItems:'center',gap:80,marginVertical:25,}}>
            <Ionicons name="close" size={36} color="black" onPress={()=>{SetModal(false)}}/>
            <Text style={{textAlign:'center',fontSize:24,fontFamily:"JSSemi"}}>Select a country</Text>
            </View>
            <View style={[GlobalStyle.input,{flexDirection:'row',alignItems:'center',marginBottom:16,gap:20}]}>
            <Feather name="search" size={24} color="gray" />
            <TextInput placeholder="Search..." value={countryName} onChangeText={(text) => Setcountry(text)} style={{fontSize:16,fontFamily:'JSRegular',}}/>
            </View>
        <FlatList
        data={filteredCountries}
        renderItem={({item})=>{
            return (
                <TouchableOpacity onPress={()=>CountrySelection(item) }><Text style={[GlobalStyle.text,{marginBottom:10,fontSize:16}]}>{item.name}</Text></TouchableOpacity>
            )
        }}/>
        </View>
      </Modal>
      <TouchableOpacity style={[GlobalStyle.button,{borderWidth:0,backgroundColor:color.primary,marginTop:40}]} onPress={handleEmail}>
          <Text style={[GlobalStyle.bold,{color:color.secondary,fontSize:16}]}>Continue with Email</Text>
          
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'gray',fontSize:16,fontFamily:"JSSemi",paddingTop:24}}>Already have an account?</Text><TouchableOpacity onPress={handleLogin}><Text style={{color:color.primary,fontFamily:"JSSemi",fontSize:16,marginTop:24}} > Login</Text></TouchableOpacity>
        </View>
        <Text style={{color:'gray',fontFamily:"JSSemi",marginTop:18,marginBottom:83,textAlign:'center',lineHeight:22}}>By signing up you agree to our <Text style={{color:'black'}}>Terms <Text style={{color:'gray'}}>and</Text> Conditions of Use</Text></Text>
        </View>
        
    </ScrollView>
  )
}

export default Signup2