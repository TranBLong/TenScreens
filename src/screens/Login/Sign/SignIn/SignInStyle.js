import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Đặt nền trong suốt để hiển thị hình nền
    paddingHorizontal: 28,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logoImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  appName: {
    fontSize: 34,
    fontWeight: "400",
    color: "#120D26",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#120D26",
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E4DFDF",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 56,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#120D26",
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10, //Tạo khoảng cách giữa icon và TextInput
    tintColor: "#747688", // Màu sắc của icon
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
    color: "#120D26",
    marginLeft: 8,
  },
  forgotPasswordText: {
    fontSize: 13,
    color: "#120D26",
  },
  signInButton: {
    backgroundColor: "#5669FF",
    height: 58,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Bắt buộc có để định vị ô tròn mũi tên
    shadowColor: "#5669FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
    width: "80%",
    alignSelf: "center",
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  arrowCircle: {
    position: "absolute",
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#3D56F0", // Màu xanh đậm hơn nền nút để làm nổi bật icon
    justifyContent: "center",
    alignItems: "center",
  },
  orText: {
    textAlign: "center",
    color: "#9D9898",
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E4DFDF",
    borderRadius: 12,
    height: 56,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    width: "80%",
    alignSelf: "center",
  },
  socialIcon: {
    width: 22,
    height: 22,
    marginRight: 10, // Tạo khoảng cách giữa logo và chữ
  },
  socialButtonText: {
    fontSize: 14,
    color: "#120D26",
    fontWeight: "400",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  footerText: {
    fontSize: 14,
    color: "#120D26",
  },
  signUpText: {
    fontSize: 14,
    color: "#5669FF",
    fontWeight: "300",
  },
});

export default styles;
