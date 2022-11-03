import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../Constants/Theme';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={style.headerImage} source={item.image}>
        <View style={style.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              source={require('../assets/Icons/back.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
          <Image
            source={require('../assets/Icons/bookmarkX.png')}
            style={{height: 30, width: 30}}
          />
        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <Image
            source={require('../assets/Icons/map.png')}
            style={{height: 28, width: 28}}
          />
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 15, fontWeight: '400'}}>{item.location}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginTop: 12, flexDirection: 'row'}}>
              <Image
                source={require('../assets/Icons/star.png')}
                style={{width: 20, height: 20, resizeMode: 'cover'}}
              />
              <Image
                source={require('../assets/Icons/star.png')}
                style={{width: 20, height: 20, resizeMode: 'cover'}}
              />
              <Image
                source={require('../assets/Icons/star.png')}
                style={{width: 20, height: 20, resizeMode: 'cover'}}
              />
              <Image
                source={require('../assets/Icons/star.png')}
                style={{width: 20, height: 20, resizeMode: 'cover'}}
              />
              <Image
                source={require('../assets/Icons/rating.png')}
                style={{width: 20, height: 20, resizeMode: 'cover'}}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.dark,
                  fontSize: 17,
                  marginLeft: 10,
                }}>
                4.5
              </Text>
            </View>
            <Text style={{marginTop: 12}}>253reviews</Text>
          </View>
          <View style={{marginTop: 12}}>
            <Text style={{lineHeight: 20}}>{item.details}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
            Price Per Night
          </Text>
          <View style={style.priceTag}>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 5}}>
              ${item.price}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 13, marginLeft: 10}}>
              +breakfast
            </Text>
          </View>
        </View>
        <TouchableOpacity style={style.btn}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: COLORS.white}}>
            BOOK NOW
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
});

export default DetailsScreen;
