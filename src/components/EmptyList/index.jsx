import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextNormal } from '../CustomTexts'

const EmptyList = (props) => {
    const {message} = props
  return (
    <View style = {styles.container}>
      <TextNormal center bold>{message || "No Chats Found."}</TextNormal>
    </View>
  )
}

export default EmptyList

const styles = StyleSheet.create({
    container:{flex:1, alignItems:'center', justifyContent:'center'}
})