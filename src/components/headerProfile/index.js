import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Icon } from "react-native-elements";

const HeaderProfile = ({ name, avatarUrl, onSettingsPress }) => {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Avatar
        size="medium"
        rounded
        source={{
          uri: avatarUrl || "https://static.promediateknologi.id/crop/0x5:800x598/0x0/webp/photo/p2/222/2024/08/14/3-63818274.jpg",
        }}
        containerStyle={styles.avatar}
      />

      {/* Name */}
      <Text style={styles.name}>{name || "S.Ibnu Romadhon"}</Text>

      {/* Settings Icon */}
      <Icon
        name="settings"
        type="feather"
        size={24}
        color="#6200ea"
        onPress={onSettingsPress}
        containerStyle={styles.settingsIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  avatar: {
    borderWidth: 2,
    borderColor: "#6200ea",
  },
  name: {
    flex: 1,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  settingsIcon: {
    padding: 5,
  },
});

export default HeaderProfile;
