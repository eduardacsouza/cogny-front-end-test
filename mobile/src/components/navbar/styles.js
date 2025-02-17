import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#141419",
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
