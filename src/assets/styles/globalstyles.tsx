import {StyleSheet} from 'react-native';
import { color } from '../../theme/colors';


export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:20,
  },
  onboarding:{
    flex:1,
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:color.primary,
    alignItems:'center',
  },
  text:{
    fontFamily:'JSRegular'
  },
  bold:{
    fontFamily:'JSSemi'
  },
  onboardingText:{
    paddingVertical:24,
    paddingHorizontal:32,
    backgroundColor:color.secondary,
    alignItems:'center',
    position:'absolute',
    bottom:40,
    borderRadius:32,
    marginHorizontal:24
  },
  indicator:{
    width:10,
    height:10,
    borderRadius:15,
    backgroundColor:color.primary,
  },
  ActiveIndicator:{
    width:32
  },
  button:{
    flexDirection:'row',
     borderWidth:2,
     width:327,
     height:56,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:24,
     marginBottom:16,
     gap:14.21
  },
  input:{
    fontSize:16,
    fontFamily:'JSRegular',
    borderWidth:1,
    width:327,
    paddingVertical:16,
    paddingHorizontal:14,
    borderRadius:24,
    borderColor:'gray',
    marginTop:10
  }
});
