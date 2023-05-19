import {View,Text,ScrollView,StatusBar,TouchableOpacity,FlatList,StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {color} from '../theme/colors';
import {NavigationProp,} from '@react-navigation/native';
import {GlobalStyle} from '../assets/styles/globalstyles';
import {Fields} from '../constant/constant';
import Modal from 'react-native-modal';
import GoBack from '../components/goBack';


type RootStackParamList = {
  login: undefined;
};

type MyComponentProps = {
  navigation: NavigationProp<RootStackParamList, 'login'>;
};

const Specialization: React.FC<MyComponentProps> = ({navigation}) => {

  const [modalVisible,SetModalVisible]=useState(false)

  const handleOtp = () => {
    SetModalVisible(true)
  };

  const HandleAgree=()=>{
    navigation.navigate('login')
  }

  return (
    <ScrollView style={GlobalStyle.screenContainer} contentContainerStyle={{alignItems:'center'}}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'} />
      <GoBack/>
      <Text style={[GlobalStyle.screenHeader,{paddingHorizontal: 20,}]}>
        What is your specialization?
      </Text>
      <Text style={[GlobalStyle.text,style.subtitle]}>
        Lorem ipsum dolor sit amet, consectetur{' '}
      </Text>
      <View style={{height:400}}>
      <FlatList
        data={Fields}
        renderItem={({item}) => (
            <Text
              style={style.list}>
              {item.name}
            </Text>
        )}
      />
      </View>
      <TouchableOpacity
        style={[GlobalStyle.social,style.social]}
        onPress={handleOtp}>
        <Text
          style={[GlobalStyle.bold, {color: color.secondary, fontSize: 16}]}>
          Continue
        </Text>
      </TouchableOpacity>
      <Modal isVisible={modalVisible} animationIn="slideInUp" animationOut="slideOutDown" backdropOpacity={0.9}>
          <View style={style.modal}>
            <View style={style.modalInner}>
            <Text style={[GlobalStyle.text,style.terms]}>I agree to the Terms of Service and Conditions of Use including consent to electronic communications and I affirm that the information provided is my own.</Text>
            <TouchableOpacity onPress={HandleAgree}>
        <Text
          style={[GlobalStyle.bold,style.agree ]}>
          Agree and Continue
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          GlobalStyle.social,
          {borderWidth: 0, marginVertical: 24},
        ]}
        onPress={()=>SetModalVisible(false)}>
        <Text
          style={[GlobalStyle.bold, {color: 'tomato', fontSize: 16,left:-20}]}>
          Delete
        </Text>
      </TouchableOpacity>
            </View>
          </View>
      </Modal>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  subtitle:{
    textAlign: 'center',
    paddingBottom: 40,
    fontSize: 16,
    color: 'gray',
    paddingHorizontal: 35,
    lineHeight: 22,
  },
  social:{
    borderWidth: 0,
    backgroundColor: color.primary,
    marginTop: 40,
    marginBottom:80
  },
  list:{
    fontFamily: 'JSSemi',
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
    borderRadius: 24,
    width:350
  },
  modal:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInner:{
    width: 331,
    height: 356,
    backgroundColor: 'white',
    borderRadius: 16 ,
    paddingHorizontal:24,
    paddingVertical:40
  },
  terms:{
    fontSize:16,
    textAlign:'center',
    lineHeight:24
  },
  agree:{
    color: color.secondary,
    backgroundColor: color.primary,
    fontSize: 16,
    textAlign:'center',
    paddingVertical:16,
    width:200,
    left:40,
    borderRadius:24,
    marginTop:24
  }
})

export default Specialization;


