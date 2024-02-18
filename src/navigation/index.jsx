import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'


const RootNavigation = () => {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})