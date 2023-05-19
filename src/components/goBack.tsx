import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

 const GoBack:React.FC=() =>{
    const navigation = useNavigation()

    const GoBack=()=>{
        navigation.goBack()
      }

  return (
    <Ionicons name="arrow-back-sharp" size={32} color="black" style={{left:-150}} onPress={GoBack}/>
  )
}

export default GoBack