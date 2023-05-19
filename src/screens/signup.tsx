import { View, Text,StatusBar, TouchableOpacity, TextInput,ScrollView, Alert, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyle } from '../assets/styles/globalstyles';
import { NavigationProp } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { setEmail } from '../redux/actions';
import { RootState } from '../redux/store';
import GoBack from '../components/goBack';


type RootStackParamList = {
  signup2: undefined;
  login: undefined;
  // Add any other screens here
};
type MyComponentProps ={
  navigation: NavigationProp<RootStackParamList,'signup2'|'login'>; // Replace {} with your navigator's params type
}

 const Signup:React.FC<MyComponentProps>=({navigation}) =>{
  const email = useSelector((state:RootState)=>state.userReducer.email)
  const dispatch = useDispatch()

  const handleLogin=()=>{
    navigation.navigate('login')
  }
  const handleEmail=()=>{
    if (email){
      console.log('email',{email})
      dispatch(setEmail(email))
    navigation.navigate('signup2',)
    }
    else{
      Alert.alert('Invalid Email','Please enter your email address',[{text:'OK'}])
    }
  }

  return (
    <ScrollView style={GlobalStyle.screenContainer} contentContainerStyle={{ alignItems: 'center' }}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'}/>
      <GoBack/>
      <View>
        <Text style={GlobalStyle.screenHeader}>Create account</Text>
        <Text style={GlobalStyle.screenSubHeader}>Lorem ipsum dolor sit amet</Text>
        <TouchableOpacity style={GlobalStyle.social}>
        <AntDesign name="google" size={24} color="blue" />
          <Text style={GlobalStyle.bold}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyle.social}>
        <AntDesign name="apple1" size={24} color="black" />
          <Text style={[GlobalStyle.bold]}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionA}>
        <View style={styles.lineWidth}/>
        <Text style={[GlobalStyle.text,{color:'gray'}]}>Or continue with</Text>
        <View style={styles.lineWidth}/>
      </View>
      <Text style={[GlobalStyle.bold,{left:-150}]}>Email</Text>
      <TextInput onChangeText={(val)=>{dispatch(setEmail(val))}} value={email} placeholder='Enter your email address' style={GlobalStyle.input}/>
      <TouchableOpacity style={[GlobalStyle.social,{borderWidth:0,backgroundColor:color.primary,marginTop:40}]} onPress={handleEmail}>
          <Text style={[GlobalStyle.bold,{color:color.secondary,fontSize:16}]}>Continue with Email</Text>
        </TouchableOpacity>
        <View style={styles.flex}>
        <Text style={{color:'gray',fontSize:16,fontFamily:"JSSemi",paddingTop:24}}>Already have an account?</Text><TouchableOpacity onPress={handleLogin}><Text style={{color:color.primary,fontFamily:"JSSemi",fontSize:16,marginTop:24}} > Login</Text></TouchableOpacity>
        </View>
        <Text style={{color:'gray',fontFamily:"JSSemi",marginTop:83,marginBottom:83,textAlign:'center',lineHeight:22}}>By signing up you agree to our <Text style={{color:'black'}}>Terms <Text style={{color:'gray'}}>and</Text> Conditions of Use</Text></Text>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  sectionA:{
    flexDirection:'row',
    alignItems:'center',
    gap:12,
    paddingVertical:24
  },
  lineWidth:{
    width:62,
    height:2,
    backgroundColor:"gray"
  },
  flex:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
})

export default Signup;