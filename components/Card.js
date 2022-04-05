import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Card = props => {
  return (
    <TouchableOpacity onPress={props.bookDetails}>
      <View style={styles.card}>
        <View style={{ height: 130, alignItems: 'center' }}>
          <Image
            style={{ flex: 1, resizeMode: 'contain', width: 150 }}
            source={{ uri: props.img }}
          />
        </View>
        <Text
          numberOfLines={2}
          style={{ fontWeight: 'bold', fontSize: 15, marginTop: 10, flex: 1 }}
        >
          {props.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Tsh.{props.price}
          </Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'rgb(32, 53, 70)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <MaterialCommunityIcons name='cart' color='#ffffff' size={28} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: '#ffffff',
    width: Dimensions.get('screen').width / 2 - 30,
    marginHorizontal: 2,
    borderRadius: 20,
    marginBottom: 20,
    padding: 15
  }
})

export default Card
