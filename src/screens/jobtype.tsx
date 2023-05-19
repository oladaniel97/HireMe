import { View, Text,ScrollView,StatusBar ,TouchableOpacity,Image, StyleSheet} from 'react-native'
import React from 'react'
import { color } from '../theme/colors';
import { NavigationProp } from '@react-navigation/native';
import { GlobalStyle } from '../assets/styles/globalstyles';
import GoBack from '../components/goBack';

type RootStackParamList = {
    jobType: undefined;
    specialization:undefined
  };
  type MyComponentProps ={
    navigation: NavigationProp<RootStackParamList,'jobType','specialization'>;
  }

const JobType:React.FC<MyComponentProps>=({navigation})=> {

    const handleSubmit=()=>{
        navigation.navigate('specialization')
    }

  return (
    <ScrollView style={GlobalStyle.screenContainer} contentContainerStyle={{ alignItems: 'center' }}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'}/>
      <GoBack/>
      <Text style={GlobalStyle.screenHeader}>Choose Job Type</Text>
        <Text style={[GlobalStyle.screenSubHeader,{paddingHorizontal:35,lineHeight:22}]}>Are you looking for a new job or looking for new employee </Text>
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                    <Image source={require('../assets/images/Icon.png')}/>
                    <Text style={styles.cardTitle}>Find a Job</Text>
                    <Text style={styles.cardBody}>It’s easy to find your dream jobs here with us.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                    <Image source={require('../assets/images/icon2.png')} />
                    <Text style={styles.cardTitle}>Find a employee</Text>
                    <Text style={styles.cardBody}>It’s easy to find employees here with us.</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={[GlobalStyle.social,styles.continue]} onPress={handleSubmit}>
            <Text style={[GlobalStyle.bold,{color:color.secondary,fontSize:16}]}>Continue</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      gap:10,
      marginTop:40
    },
    card:{
      width:170,
      alignItems:'center',
      paddingHorizontal:18,
      paddingVertical:24,
      borderRadius:24,
      backgroundColor:'#F0F0F0'
    },
    cardTitle:{
      fontFamily:'JSBold',
      fontSize:16,
      marginTop:25
    },
    cardBody:{
      textAlign:'center',
      lineHeight:20,
      fontFamily:'JSRegular',
      marginTop:8
    },
    continue:{
      borderWidth:0,
      backgroundColor:color.primary,
      marginTop:140
    }
})
export default JobType