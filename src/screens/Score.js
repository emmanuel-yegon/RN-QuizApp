import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function Score({ navigation }) {
  const route = useRoute();

  const { score } = route.params;

  console.log(score);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/splash2.jpg")}
      />
      <Text style={{ marginTop: 10 }}>
        Congratulations!! Your Scored {score} points..
      </Text>

      <Pressable
        style={styles.playBtn}
        onPress={() => navigation.navigate("Splash")}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>Play Again</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
  },
  playBtn: {
    backgroundColor: "purple",
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
  },
});
