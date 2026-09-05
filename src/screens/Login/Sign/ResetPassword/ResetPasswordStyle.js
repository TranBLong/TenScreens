import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
    marginLeft: -8, // Căn chỉnh lề cho icon sát ra viền
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#120D26",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#120D26",
    lineHeight: 25,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E4DFDF",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 56,
    marginBottom: 30,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#120D26",
  },
  sendButton: {
    backgroundColor: "#5669FF",
    height: 58,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    shadowColor: "#5669FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
    width: "80%",
    alignSelf: "center",
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  arrowCircle: {
    position: "absolute",
    right: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#3D56F0",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;