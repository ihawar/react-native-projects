import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Linking,
  Pressable,
  Keyboard,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const App = () => {
  const [text, onChangeText] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function reset() {
    onChangeText("");
    setSubmitted(false);
  }

  function submit() {
    if (text.trim().length > 0) {
      setSubmitted(true);
      Keyboard.dismiss();
    }
  }

  return (
    <SafeAreaProvider style={styles.body}>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
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

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#a47abdff"
            placeholder="Enter your name..."
            onChangeText={onChangeText}
            value={text}
          />
          <Pressable
            style={({ pressed }) => [
              styles.buttonPrimary,
              pressed && styles.buttonPrimaryPressed,
            ]}
            onPress={submit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.buttonSecondary,
              pressed && styles.buttonSecondaryPressed,
            ]}
            onPress={reset}
          >
            <Text style={{ color: "#e4c1f9" }}>Reset</Text>
          </Pressable>
        </View>
        {submitted && (
          <Text style={{ color: "#e4c1f9", fontWeight: "600", fontSize: 24 }}>
            Hello {text}!👋
          </Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#2f1541",
    paddingTop: 50,
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
  },
  container: {
    alignItems: "center",
    gap: 12,
    width: "100%",
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
  input: {
    borderRadius: 12,
    borderColor: "#e4c1f9",
    borderWidth: 1,
    width: "80%",
    padding: 12,
    color: "#e4c1f9",
  },
  buttonPrimary: {
    backgroundColor: "#e4c1f9",
    borderRadius: 12,
    padding: 12,
    width: "80%",
    alignItems: "center",
  },
  buttonPrimaryPressed: {
    backgroundColor: "#d1a1ecff",
  },
  buttonSecondary: {
    borderRadius: 12,
    padding: 12,
    width: "80%",
    alignItems: "center",
  },
  buttonSecondaryPressed: {
    backgroundColor: "#411e59ff",
  },
  buttonText: {
    color: "#2f1541",
  },
});

export default App;
