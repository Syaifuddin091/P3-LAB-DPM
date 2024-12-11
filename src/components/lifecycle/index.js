import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Card, Icon, Avatar } from "react-native-elements";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isSpecial, setIsSpecial] = useState(false);

  useEffect(() => {
    console.log("Component Did Mount");

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component Did Update: Count berubah menjadi", count);
    if (count === 5) {
      setIsSpecial(true);
    } else {
      setIsSpecial(false);
    }
  }, [count]);

  const changeCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Cycle Component</Text>

      {/* Bagian Card */}
      <Card containerStyle={styles.card}>
        <Card.Title>
          <Icon name="clock" type="feather" size={24} color="#6200ea" />
          {"  "}Timer: {timer} seconds
        </Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>Count: {count}</Text>
        {isSpecial && (
          <Text style={styles.specialText}>
            <Icon name="star" type="feather" size={20} color="green" />
            {"  "}Wow! Count is now 5!
          </Text>
        )}
      </Card>

      {/* Bagian Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Update Count"
          onPress={changeCount}
          buttonStyle={styles.button}
          icon={<Icon name="plus" type="feather" size={20} color="white" />}
        />
        <Button
          title="Reset Count"
          onPress={resetCount}
          buttonStyle={[styles.button, { backgroundColor: "red" }]}
          icon={<Icon name="refresh-ccw" type="feather" size={20} color="white" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6200ea",
  },
  avatar: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#6200ea",
  },
  card: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  specialText: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#6200ea",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default LifeCycle;
