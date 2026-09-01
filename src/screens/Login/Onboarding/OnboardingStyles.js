import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Background nền trắng
  },
  // Thêm style này vào trong StyleSheet.create của styles.js
imageContainer: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: 70,
  position: 'relative', // Bắt buộc có để fadeOverlay căn theo khung này
},
mockupImage: {
  width: width * 0.85,
  height: '70%',
},
fadeOverlay: {
  position: 'absolute',
  bottom: 0,            // Dính ở dưới chân ảnh
  left: 0,
  right: 0,
  height: 590,           // Độ cao của vùng mờ dần (tùy chỉnh 70 - 100px)
},
bottomCard: {
  position: 'absolute', // Đặt vị trí tuyệt đối ở đáy
  bottom: 0,
  left: 0,
  right: 0,
  height: '35%',        // Chiều cao cố định của khung xanh
  backgroundColor: '#5669FF',
  borderTopLeftRadius: 35,
  borderTopRightRadius: 35,
  paddingHorizontal: 40,
  paddingTop: 40,
  paddingBottom: 40,
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,           // Đè lên trên imageContainer
},
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
  },
  description: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;