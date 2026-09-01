import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Căn giữa logo theo chiều dọc
    alignItems: 'center',     // Căn giữa logo theo chiều ngang
  },
  logo: {
    width: 300,
    height: 120,
  },
});
export default styles;