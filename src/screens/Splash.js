import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/splash.png")} />
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Instructions
      </Text>
      <View style={styles.instruction}>
        <Text style={styles.instructionText}>
          Each Quiz Has Four Options Quiz
        </Text>
        <Text style={styles.instructionText}>
          Progress will be shown at Top
        </Text>
        <Text style={styles.instructionText}>
          Score would be shown at the End
        </Text>
      </View>
      <Pressable
        style={styles.startBtn}
        onPress={() => navigation.navigate("Question")}
      >
        <Text style={styles.btnText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
  instruction: {
    backgroundColor: "purple",
    borderRadius: 4,
    padding: 4,
    height: 110,
    width: 300,
    justifyContent: "center",
  },
  instructionText: {
    color: "white",
    fontSize: 17,
    alignSelf: "center",
  },
  startBtn: {
    backgroundColor: "purple",
    marginTop: 25,
    borderRadius: 4,
    paddingHorizontal: 24,
    paddingVertical: 5,
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
});
