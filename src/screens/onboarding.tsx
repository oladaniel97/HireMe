import { View, Text, Image, FlatList,Dimensions ,TouchableOpacity,StatusBar, StyleSheet} from 'react-native'
import React, { useRef,useState,useEffect } from 'react'
import { GlobalStyle } from '../assets/styles/globalstyles'
import { color } from '../theme/colors'
import { Slides } from '../constant/constant';
import { NavigationProp } from '@react-navigation/native';

const { width } = Dimensions.get('window');
type Slide = typeof Slides[number];


type RootStackParamList = {
    signup: undefined;
    // Add any other screens here
  };
type MyComponentProps ={
    navigation: NavigationProp<RootStackParamList,'signup'>; // Replace {} with your navigator's params type
  }

 const Onboarding:React.FC<MyComponentProps>=({navigation}) =>{
    const flatListRef = useRef<FlatList<Slide>>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const renderIndicators = () => {
        return Slides.map((slide, index) => {
          const indicatorStyle = index === activeSlide ? [GlobalStyle.indicator, GlobalStyle.ActiveIndicator] : GlobalStyle.indicator;
          return <View key={index} style={indicatorStyle} />;
        });
      };
    
      const handleNextSlide = () => {
        if (activeSlide === Slides.length - 1) {
          console.log('Get Started pressed');
          navigation.navigate('signup')
        } else {
          setActiveSlide(activeSlide + 1);
          flatListRef.current?.scrollToIndex({ index: activeSlide + 1 });
        }
      };

      const handleSkipToLastSlide = () => {
        flatListRef.current?.scrollToIndex({ index: Slides.length - 1 ,animated: true,});
        setActiveSlide(Slides.length - 1);
      };

      useEffect(() => {
        if (activeSlide === Slides.length - 1) {
          flatListRef.current?.scrollToIndex({
            index: activeSlide,
            animated: true,
            viewPosition: 0.5,
          });
        } else {
          flatListRef.current?.scrollToIndex({ index: activeSlide ,animated: true,
            viewPosition: 0.5,});
        }
      }, [activeSlide]);

  return (
    <View style={GlobalStyle.onboarding}>
        <StatusBar barStyle={'light-content'} backgroundColor={color.primary} />
        <FlatList
        ref={flatListRef}
        data={Slides}
        pagingEnabled
        snapToAlignment={'center'}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}:{item:Slide})=>{
            return (
                <View style={{width,alignItems:'center'}}>
                    <Image source={item.image} style={{top:20,}}/>
                    {activeSlide !== Slides.length - 1 && (
                    <Text onPress={handleSkipToLastSlide} style={styles.skip}>Skip</Text>)}
                    <View style={GlobalStyle.onboardingText}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                    <View style={styles.indictors}>{renderIndicators()}</View>
      <TouchableOpacity style={styles.next} onPress={handleNextSlide}>
        <Text style={[GlobalStyle.text,{color:color.secondary}]}>{activeSlide === Slides.length - 1 ? 'Get Started' : 'Next'}</Text>
      </TouchableOpacity>
                    </View>
                </View>
            )
        }}
        onMomentumScrollEnd={(event) => {
            const { x } = event.nativeEvent.contentOffset;
            const slideIndex = Math.round(x / width);
            setActiveSlide(slideIndex);
          }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    skip:{
      position:'absolute',
      top:18,right:34,
      color:color.secondary,
      fontFamily:'JSRegular'
    },
    title:{
      fontFamily:'JSBold',
      fontSize:24,
      textAlign:'center',
      lineHeight:32,
      paddingHorizontal:15
    },
    subtitle:{
      textAlign:'center',
      lineHeight:22,
      padding:15,
      fontFamily:'JSRegular'
    },
    indictors:{
      flexDirection:'row',
      gap:5,
      alignItems:'center'
    },
    next:{
      paddingHorizontal:32,
      paddingVertical:16,
      backgroundColor:color.primary,
      borderRadius:24,
      marginTop:10
    }
})

export default Onboarding

