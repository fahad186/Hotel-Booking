import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, SIZES} from '../Constants/Theme';
import hotels from '../Constants/hotels';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

const HomeScreen = ({navigation}) => {
  const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const CategoryList = () => {
    return (
      <View style={style.categoryList}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={{
                ...style.categoryListText,
                color:
                  selectedCategoryIndex == index ? COLORS.primary : COLORS.dark,
              }}>
              {item}
            </Text>
            {selectedCategoryIndex == index && (
              <View
                style={{
                  height: 3,
                  width: 30,
                  backgroundColor: COLORS.primary,
                  marginTop: 2,
                }}></View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Cards = ({hotel, index}) => {
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => navigation.navigate('Details', hotel)}>
        <Animated.View style={{...style.card, transform: [{scale}]}}>
          <Animated.View style={{...style.cardOverLay, opacity}} />
          <View style={style.priceTag}>
            <Text
              style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
              ${hotel.price}
            </Text>
          </View>
          <Image source={hotel.image} style={style.cardImage} />
          <View style={style.cardDetails}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 17,
                    color: COLORS.dark,
                  }}>
                  {hotel.name}
                </Text>
                <Text style={{fontSize: 12, color: COLORS.grey}}>
                  {hotel.location}
                </Text>
              </View>
              <View>
                <Image
                  source={require('../assets/Icons/bookmark.png')}
                  style={{
                    resizeMode: 'cover',
                    height: 26,
                    width: 26,
                    marginTop: 7,
                    marginHorizontal: 10,
                    marginLeft: 10,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/Icons/star.png')}
                  style={{
                    resizeMode: 'cover',
                    height: 15,
                    width: 15,
                  }}
                />
                <Image
                  source={require('../assets/Icons/star.png')}
                  style={{
                    resizeMode: 'cover',
                    height: 15,
                    width: 15,
                  }}
                />
                <Image
                  source={require('../assets/Icons/star.png')}
                  style={{
                    resizeMode: 'cover',
                    height: 15,
                    width: 15,
                  }}
                />
                <Image
                  source={require('../assets/Icons/star.png')}
                  style={{
                    resizeMode: 'cover',
                    height: 15,
                    width: 15,
                  }}
                />
                <Image
                  source={require('../assets/Icons/rating.png')}
                  style={{
                    resizeMode: 'cover',
                    height: 15,
                    width: 15,
                  }}
                />
              </View>
              <Text style={{fontSize: 10, color: COLORS.grey}}>201reviews</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const TopHotelCard = ({hotel}) => {
    return (
      <View style={style.topHotelCard}>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 5,
            right: 5,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/Icons/star.png')}
            style={{
              height: 15,
              width: 15,
              resizeMode: 'cover',
            }}
          />
          <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text>
        </View>

        <Image style={style.topHotelCardImage} source={hotel.image} />
        <View style={{marginTop: 5, marginLeft: 5}}>
          <Text style={{fontSize: 10, fontWeight: 'bold', color: COLORS.dark}}>
            {hotel.name}
          </Text>
          <Text style={{fontSize: 8, color: COLORS.grey}}>
            {hotel.location}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View style={{paddingBottom: 15}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.dark}}>
            Find Your Hotel
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginRight: 10,
                fontSize: 30,
                fontWeight: 'bold',
                color: COLORS.dark,
              }}>
              in
            </Text>
            <Text
              style={{
                marginRight: 10,
                fontSize: 30,
                fontWeight: 'bold',
                color: COLORS.primary,
              }}>
              USA
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Image
            source={require('../assets/Icons/user.png')}
            style={{
              height: 30,
              width: 30,
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.searchInputOption}>
          <Image
            source={require('../assets/Icons/search-interface-symbol.png')}
            style={{
              height: 30,
              width: 30,
              resizeMode: 'cover',
              marginLeft: 10,
              marginRight: 20,
            }}
          />
          <TextInput
            placeholder="Search"
            style={{fontSize: 20, paddingLeft: 10}}
          />
        </View>
        <CategoryList />

        <View>
          <Animated.FlatList
            onMomentumScrollEnd={e => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            data={hotels}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => <Cards hotel={item} index={index} />}
            snapToInterval={cardWidth}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text style={{fontWeight: 'bold', color: COLORS.grey}}>
              Top Hotels
            </Text>
            <Text style={{fontWeight: 'bold', color: COLORS.grey}}>
              Show All
            </Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
              marginTop: 20,
              paddingBottom: 30,
            }}
            data={hotels}
            renderItem={({item}) => <TopHotelCard hotel={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputOption: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetails: {
    height: 100,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardOverLay: {
    height: 280,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: SIZES.radius,
  },
  topHotelCard: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: SIZES.radius,
  },
  topHotelCardImage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default HomeScreen;
