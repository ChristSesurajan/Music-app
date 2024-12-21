import { StyleSheet, Text, View , ImageBackground, Pressable} from 'react-native'
import  React  from 'react';
import back from "@/assets/images/background.jpg"
import { Link } from 'expo-router';


const app = () => {
 
  return (
    <View style={styles.container}>
      <ImageBackground source={back} resizeMode='cover' style={styles.image}>
      <Text style={styles.text}>Music</Text>
      <Link href='/explore' style={{marginHorizontal:'auto' }} asChild>
      <Pressable style={styles.button}>
      <Text style={styles.buttontext}>Explore</Text>
      </Pressable>
      </Link >
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
    bottom:300,
    color:'white',
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
   

  },
  link:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    textDecorationLine:'underline'

  },
  buttontext:{
    color:'gold',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
   

  },
  button:{
    top:200,
    height:20,
    width:100,
    borderRadius:5,
    justifyContent:'center',
    backgroundColor:'black',
    

  }
})
