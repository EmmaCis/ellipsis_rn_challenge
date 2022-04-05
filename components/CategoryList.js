import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CategoryList = props => {
  return (
    <View style={styles.categoryContainer}>
      {props.categories.map((item, index) => (
        <TouchableOpacity key={index} onPress={props.setCategoryIndex}>
          <Text style={styles.categoryText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  categoryText: {
    fontSize: 16,
    color: '#F1F1F1',
    fontWeight: 'bold'
  }
  //   categorySelected: {
  //     color: 'rgb(255, 163, 26)',
  //     paddingBottom: 5,
  //     borderBottomWidth: 2,
  //     borderColor: 'rgb(255, 163, 26)'
  //   }
})

export default CategoryList
