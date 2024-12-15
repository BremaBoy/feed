import { View, Text, Pressable, StyleSheet, } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link href={"/explore"} asChild>
        <Pressable style={styles.btn}>
          <Text style={styles.btntext}>Go to explore</Text>
        </Pressable>
      </Link>
    </View>
  );
};


const styles = StyleSheet.create({
  btn:{
    marginHorizontal: 140,
    padding: 10,
    backgroundColor: '#141414',
    borderRadius: 10
  },
  btntext:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 15
  }
})

export default index;
