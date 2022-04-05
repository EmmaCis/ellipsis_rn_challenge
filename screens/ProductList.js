import React from 'react'
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import CategoryList from '../components/CategoryList'
import Card from '../components/Card'
import books from '../data/books'

const categories = ['Business', 'CookBooks', 'Mystery', 'Scifi']

export default class ProductList extends React.Component {
  state = {
    categories: categories,
    categoryIndex: 0
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', color: '#ffffff' }}
            >
              Welcome to
            </Text>
            <Text
              style={{
                fontSize: 38,
                fontWeight: 'bold',
                color: 'rgb(255, 163, 26)'
              }}
            >
              Ellipsis Shop
            </Text>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name='cart' size={28} color='#ffffff' />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30, flexDirection: 'row' }}>
          <View style={styles.searchContainer}>
            <MaterialCommunityIcons
              name='magnify'
              size={25}
              style={{ marginLeft: 20 }}
            />
            <TextInput placeholder='Search' style={styles.input} />
          </View>
          <TouchableOpacity style={styles.sortBtn}>
            <MaterialCommunityIcons
              name='sort-variant'
              size={30}
              color='rgb(32, 53, 70)'
            />
          </TouchableOpacity>
        </View>
        <CategoryList
          categories={this.state.categories}
          categoryIndex={this.state.categoryIndex}
        />
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50
          }}
          numColumns={2}
          data={books}
          renderItem={({ item }) => (
            <Card
              {...item}
              bookDetails={() =>
                this.props.navigation.navigate('Details', item)
              }
            />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(32, 53, 70)',
    paddingTop: Constants.statusBarHeight
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchContainer: {
    height: 50,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1
  },
  sortBtn: {
    marginLeft: 10,
    width: 50,
    height: 50,
    backgroundColor: 'rgb(255, 163, 26)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})
