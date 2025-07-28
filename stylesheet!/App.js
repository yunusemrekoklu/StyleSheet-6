import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[flag, setFlag]=useState(false);
  return (
    <View style={styles.box}>
      <Text style={styles.bold}>Yunus Emre Köklü </Text>
      <Text style={[styles.bold ,{fontSize: 30,color:"red"}]}>Ferzan Kara</Text>
      <Text style={[styles.bold , {color : flag ? "blue":"white"}]}> Serkan Temizkan </Text>
      <Text style={[flag ? styles.class1: styles.class2 , styles.constant]}>
        {flag ? "True ": "False "}
      </Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

  const styles = StyleSheet.create({
    box:{
      alignItems:"center",
      justifyContent:"center",
      flex: 1,
      backgroundColor:"black",
    },
    bold:{
      fontWeight:"bold",
      fontSize: 20,
      color: "green"

    },
    class1:{
      fontSize: 40,
      color:"orange",
    },
    class2:{
      fontSize: 50,
      color:"blue",
    },
    constant : {
      textTransform: "uppercase",
    },
});
