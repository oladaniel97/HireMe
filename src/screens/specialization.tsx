import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  FlatList
} from 'react-native';
import React, {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {color} from '../theme/colors';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {GlobalStyle} from '../assets/styles/globalstyles';
import {Fields} from '../constant/constant';
import Modal from 'react-native-modal';


type RootStackParamList = {
  login: undefined;
};

type MyComponentProps = {
  navigation: NavigationProp<RootStackParamList, 'login'>;
};

const Specialization: React.FC<MyComponentProps> = ({navigation}) => {

  const [modalVisible,SetModalVisible]=useState(false)

  const GoBack = () => {
    navigation.goBack();
  };

  const handleOtp = () => {
    SetModalVisible(true)
  };
  
  const HandleAgree=()=>{
    navigation.navigate('login')
  }

  return (
    <ScrollView
      style={{
        paddingTop: 32,
        paddingHorizontal: 30,
        backgroundColor: color.secondary,
        flex: 1,
      }} contentContainerStyle={{alignItems:'center'}}>
      <StatusBar backgroundColor={color.secondary} barStyle={'dark-content'} />
      <Ionicons
        name="arrow-back-sharp"
        size={32}
        color="black"
        style={{left: -150}}
        onPress={GoBack}
      />
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'JSBold',
          fontSize: 24,
          marginVertical: 8,
          paddingTop: 10,
          paddingHorizontal: 20,
        }}>
        What is your specialization?
      </Text>
      <Text
        style={[
          GlobalStyle.text,
          {
            textAlign: 'center',
            paddingBottom: 40,
            fontSize: 16,
            color: 'gray',
            paddingHorizontal: 35,
            lineHeight: 22,
          },
        ]}>
        Lorem ipsum dolor sit amet, consectetur{' '}
      </Text>
      <View style={{height:400}}>
      <FlatList
        data={Fields}
        renderItem={({item}) => (
            <Text
              style={{
                fontFamily: 'JSSemi',
                fontSize: 16,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 12,
                marginBottom: 16,
                borderRadius: 24,
                width:350
              }}>
              {item.name}
            </Text>
        )}
      />
      </View>
      
      <TouchableOpacity
        style={[
          GlobalStyle.button,
          {borderWidth: 0, backgroundColor: color.primary, marginTop: 40,marginBottom:80},
        ]}
        onPress={handleOtp}>
        <Text
          style={[GlobalStyle.bold, {color: color.secondary, fontSize: 16}]}>
          Continue
        </Text>
      </TouchableOpacity>
      
      <Modal isVisible={modalVisible} animationIn="slideInUp" animationOut="slideOutDown" backdropOpacity={0.9}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ width: 331, height: 356, backgroundColor: 'white', borderRadius: 16 ,paddingHorizontal:24,paddingVertical:40}}>
            <Text style={[GlobalStyle.text,{fontSize:16,textAlign:'center',lineHeight:24}]}>I agree to the Terms of Service and Conditions of Use including consent to electronic communications and I affirm that the information provided is my own.</Text>
            <TouchableOpacity onPress={HandleAgree}>
        <Text
          style={[GlobalStyle.bold, {color: color.secondary,backgroundColor: color.primary, fontSize: 16,textAlign:'center',paddingVertical:16,width:200,left:40,borderRadius:24,marginTop:24}]}>
          Agree and Continue
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          GlobalStyle.button,
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

export default Specialization;
