import { View, Text,ScrollView,StatusBar,TextInput, TouchableOpacity, Modal, FlatList,Alert, StyleSheet } from 'react-native'
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
import GoBack from '../components/goBack';
import { RootState } from '../redux/store';

type RootStackParamList = {
    login: undefined;
    otp: undefined;
  };
  type MyComponentProps ={
    navigation: NavigationProp<RootStackParamList,'login'|'otp'>;
    route: RouteProp<RootStackParamList, 'otp'> // Replace {} with your navigator's params type
  }

const Signup2:React.FC<MyComponentProps> = ({navigation,}) => {

  const {email,fname,lname,pw,country} = useSelector((state:RootState)=>state.userReducer)
  const dispatch = useDispatch()

    const [countryName,Setcountry] = useState<string>('')

    const filteredCountries = Object.values(countries.countries)
    .filter((country) => country.name.toLowerCase().includes(countryName.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

    const [modal,SetModal] = useState(false)

    const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);

    const CountrySelection=(item:{name:string})=>{
        dispatch(setCountry(item.name))
        SetModal(false)
    }

    const handleLogin=()=>{
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
      }

  return (
    <ScrollView style={GlobalStyle.screenContainer} contentContainerStyle={{ alignItems: 'center' }}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'}/>
      <GoBack/>
      <View>
        <Text style={GlobalStyle.screenHeader}>Complete your account</Text>
        <Text style={GlobalStyle.screenSubHeader}>Lorem ipsum dolor sit amet</Text>
        </View>
        <View>
        <Text style={[GlobalStyle.bold,]}>First Name</Text>
      <TextInput onChangeText={(val)=>{dispatch(setFname(val))}} value={fname} placeholder='Enter your First name' style={GlobalStyle.input}/>
      <Text style={[GlobalStyle.bold,{marginTop:16}]}>Last Name</Text>
      <TextInput onChangeText={(val)=>{dispatch(setLname(val))}} value={lname} placeholder='Enter your Last name' style={GlobalStyle.input}/>
      <Text style={[GlobalStyle.bold,{marginTop:16}]}>Password</Text>
      <View style={[GlobalStyle.input,styles.icon]}>
      <TextInput onChangeText={(val)=>{dispatch(setPw(val))}} value={pw} placeholder='Create a password' secureTextEntry={!isPasswordVisible} style={styles.R16} />
      <Feather name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="black" onPress={togglePasswordVisibility}
      />
      </View>
      <TouchableOpacity onPress={()=>{SetModal(true)}} style={[GlobalStyle.input,styles.icon]} >
        <TextInput editable={false} placeholder='Choose a Country' style={styles.R16} value={country}/>
        <Feather name="chevron-down" size={24} color="gray" />
      </TouchableOpacity>

{/* Modal  */}
      <Modal visible={modal} animationType="slide"  >
        <View style={{marginHorizontal:24}}>
            <View style={styles.modalHeader}>
            <Ionicons name="close" size={36} color="black" onPress={()=>{SetModal(false)}}/>
            <Text style={[styles.S24,{textAlign:'center'}]}>Select a country</Text>
            </View>
            <View style={[GlobalStyle.input,styles.modalSearch]}>
            <Feather name="search" size={24} color="gray" />
            <TextInput placeholder="Search..." value={countryName} onChangeText={(text) => Setcountry(text)} style={styles.R16}/>
            </View>
        <FlatList
        data={filteredCountries}
        renderItem={({item})=>{
            return (
                <TouchableOpacity onPress={()=>CountrySelection(item) }><Text style={[styles.R16,{marginBottom:10}]}>{item.name}</Text></TouchableOpacity>
            )
        }}/>
        </View>
      </Modal>

      <TouchableOpacity style={[GlobalStyle.social,styles.email]} onPress={handleEmail}>
          <Text style={[GlobalStyle.bold,{color:color.secondary,fontSize:16}]}>Continue with Email</Text>
        </TouchableOpacity>
        <View style={styles.flex}>
        <Text style={[styles.S16,{color:'gray',marginTop:24}]}>Already have an account?</Text><TouchableOpacity onPress={handleLogin}><Text style={[styles.S16,{color:color.primary}]} > Login</Text></TouchableOpacity>
        </View>
        <Text style={styles.terms}>By signing up you agree to our <Text style={{color:'black'}}>Terms <Text style={{color:'gray'}}>and</Text> Conditions of Use</Text></Text>
        </View>
    </ScrollView>
  )
}

const styles= StyleSheet.create({
  icon:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
    ,marginBottom:16
  },
  R16:{
    fontSize:16,
    fontFamily:'JSRegular'
  },
  S24:{
    fontSize:24,
    fontFamily:"JSSemi"
  },
  S16:{
    fontFamily:"JSSemi",
    fontSize:16
  },
  modalHeader:{
    flexDirection:'row',
    alignItems:'center',
    gap:80,
    marginVertical:25,
  },
  modalSearch:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:16,
    gap:20
  },
  flex:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  terms:{
    color:'gray',
    fontFamily:"JSSemi",
    marginTop:18,
    marginBottom:83,
    textAlign:'center',
    lineHeight:22
  },
  email:{
    borderWidth:0,
    backgroundColor:color.primary,
    marginTop:40
  }
})

export default Signup2