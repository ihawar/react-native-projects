import React from "react";
import { StyleSheet, TextInput, Text, View, Linking } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const App = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaProvider style={styles.body}>
      <SafeAreaView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.h1}> Welcome to Printer!</Text>
          <Text style={styles.h2}>
            This is my second native app using{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://reactnative.dev/")}
            >
              React Native!
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#2f1541",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  header: {
    alignItems: "center",
    gap: 12,
  },
  h1: {
    color: "#e4c1f9",
    fontSize: 24,
    fontWeight: "bold",
  },
  h2: {
    color: "#b392c7",
    fontSize: 12,
  },
  link: {
    color: "#e4c1f9",
    fontStyle: "italic",
  },
});

export default App;
