import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4A43EC',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // Header
  header: {
    backgroundColor: '#4A43EC',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationBox: {
    alignItems: 'center',
  },
  locationLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationLabel: {
    color: '#C2BFFF',
    fontSize: 12,
    marginRight: 4,
  },
  locationValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
  },
  notificationBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Search Row
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#FFFFFF',
  },
  searchDivider: {
    width: 1,
    height: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    height: 32,
    paddingHorizontal: 12,
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },

  // Categories ScrollView
  categoryScroll: {
    marginTop: -18,
  },
  categoryContainer: {
    paddingHorizontal: 20,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22,
    marginRight: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },

  // Section Header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#120D26',
  },
  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: 13,
    color: '#747688',
    marginRight: 4,
  },

  // Event Cards
  eventListContent: {
    paddingLeft: 20,
    paddingRight: 8,
    paddingBottom: 10,
  },
  eventCard: {
    width: 230,
    marginRight: 16,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    padding: 10,
    elevation: 4,
    shadowColor: '#505588',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 14,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 130,
    borderRadius: 14,
  },
  eventDateBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  eventDateNum: {
    fontSize: 14,
    fontWeight: '700',
    color: '#F0635A',
  },
  eventDateMonth: {
    fontSize: 9,
    fontWeight: '700',
    color: '#F0635A',
  },
  bookmarkBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 7,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventInfo: {
    paddingTop: 10,
    paddingHorizontal: 4,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#120D26',
  },
  goingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  avatarStack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    marginLeft: -6,
  },
  eventGoing: {
    fontSize: 12,
    color: '#3F38DD',
    fontWeight: '600',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  locationText: {
    fontSize: 12,
    color: '#747688',
    marginLeft: 4,
    flex: 1,
  },
  // Invite Banner
  inviteBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D6F7FF',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 18,
    padding: 18,
    position: 'relative', // Làm gốc tọa độ cho ảnh
    overflow: 'hidden',   // Cắt gọn phần ảnh thừa tràn ra ngoài khung
  },
  inviteTitle: {
    color: '#120D26',
    fontSize: 18,
    fontWeight: '500',
  },
  inviteSubtitle: {
    color: '#484D70',
    fontSize: 13,
    marginTop: 4,
  },
  inviteButton: {
    backgroundColor: '#00F8FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '400',
  },
  giftImage: {
    position: 'absolute', // Đặt ảnh chìm bên dưới
    right: -20,           // Đẩy sát sang mép phải (chỉnh số này nếu muốn ảnh vào sâu hơn)
    bottom: -60,          // Căn dưới đáy banner
    width: 220,           // Tăng nhẹ kích thước ảnh để nó chờm dưới chữ đẹp hơn
    height: 220,
    resizeMode: 'contain',
    zIndex: 1,            // Luôn nằm dưới khung chữ (vốn có zIndex: 2)
  },

  // Bottom Navigation Bar
  bottomTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 65,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F5',
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    fontSize: 11,
    color: '#2B2849',
    opacity: 0.4,
    marginTop: 4,
  },
  activeTabLabel: {
    color: '#5669FF',
    opacity: 1,
    fontWeight: '600',
  },
  fabContainer: {
    top: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#5669FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});