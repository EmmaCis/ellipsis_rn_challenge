import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Text
} from 'react-native'

export default class Login extends React.Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' />
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../assets/images/Ellipsis-02.png')}
                  style={styles.logo}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Enter username/email'
                  placeholderTextColor='rgba(255,255,255,0.8)'
                  keyboardType='email-address'
                  returnKeyType='next'
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Enter password'
                  placeholderTextColor='rgba(255,255,255,0.8)'
                  returnKeyType='go'
                  secureTextEntry
                  autoCorrect={false}
                  ref={'txtPassword'}
                />
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate('Home')}
                >
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{color: 'rgba(255,255,255,0.8)'}}>Don't have an account?</Text>
                <TouchableOpacity>
                  <Text style={{ color: 'red', fontStyle: 'italic', fontWeight:'bold' }}>
                    Register now
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ padding: 20 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.8)'
                  }}
                >
                  __or{' '}
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    SING IN
                  </Text>{' '}
                  with__
                </Text>
                <View style={styles.socialLoginBtn}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name='facebook'
                      size={30}
                      color='rgba(255,255,255,0.8)'
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name='google'
                      size={30}
                      color='rgba(255,255,255,0.8)'
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name='apple'
                      size={30}
                      color='rgba(255,255,255,0.8)'
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 53, 70)',
    flexDirection: 'column'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    width: 150,
    height: 100
  },
  inputContainer: {
    // position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20
    // backgroundColor: 'red'
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal: 10,
    marginBottom: 20
  },
  buttonContainer: {
    backgroundColor: 'rgb(255, 163, 26)',
    paddingVertical: 15,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18
  },
  socialLoginBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
})
