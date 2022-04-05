import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DetailsScreen = ({ navigation, route }) => {
  const book = route.params
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(32, 53, 70)' }}>
      <View style={styles.header}>
        <Icon
          name='arrow-back'
          size={28}
          color='#ffffff'
          onPress={() => navigation.goBack()}
        />
        <Icon name='shopping-cart' size={28} color='#ffffff' />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: '50%',
            height: '50%',
            resizeMode: 'contain',
            flex: 1
          }}
          source={{ uri: book.img }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text
            numberOfLines={3}
            style={{ width: '65%', fontSize: 20, fontWeight: 'bold' }}
          >
            {book.name}
          </Text>

          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: 'rgb(32, 53, 70)',
                fontWeight: 'bold',
                fontSize: 18
              }}
            >
              Tsh.{book.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10
              }}
            >
              {book.description}
            </Text>
          <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderBtn}>
                  <Text style={styles.borderBtnText}>-</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    fontWeight: 'bold'
                  }}
                > 1</Text>
                <View style={styles.borderBtn}>
                  <Text style={styles.borderBtnText}>+</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.buyBtn}>
                  <Text style={{color: 'rgb(32, 53, 70)', fontSize: 18, fontWeight: 'bold'}}>
                    Buy
                  </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#F1F1F1',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 10
  },
  priceTag: {
    backgroundColor: 'rgb(255, 163, 26)',
    width: 100,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center'
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderBtnText: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  buyBtn: {
      width: 150,
      height: 50,
      backgroundColor: 'rgb(255, 163, 26)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
  }
})

export default DetailsScreen
