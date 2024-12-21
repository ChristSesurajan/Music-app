import { StyleSheet, Text, View , ImageBackground} from 'react-native'
import  React  from 'react';
import back from "@/assets/images/background.jpg"


const app = () => {
 
  return (
    <View style={styles.container}>
      <ImageBackground source={back} resizeMode='cover' style={styles.image}>
      <Text style={styles.text}>Music</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  image:{
    flex:1,
    justifyContent:'center'
  },
  text:{
    color:'white',
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center'
  }
})
