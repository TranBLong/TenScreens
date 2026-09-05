import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Giữ nền trong suốt để hiện ImageBackground
    paddingHorizontal: 28,
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 30,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#120D26",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 15,
    color: "#120D26",
    lineHeight: 24,
    marginBottom: 35,
    opacity: 0.8, // Tạo cảm giác màu text hơi xám nhẹ giống thiết kế
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#E4DFDF",
    borderRadius: 12,
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    color: "#120D26",
    backgroundColor: "#FFFFFF",
  },
  otpInputActive: {
    borderColor: "#5669FF", // Màu viền xanh khi ô được focus
    color: "#5669FF",
  },
  continueButton: {
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
    marginBottom: 25,
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1,
  },
  arrowCircle: {
    position: "absolute",
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#3D56F0",
    justifyContent: "center",
    alignItems: "center",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  resendText: {
    fontSize: 15,
    color: "#120D26",
  },
  timerText: {
    fontSize: 15,
    color: "#5669FF",
  },
});

export default styles;