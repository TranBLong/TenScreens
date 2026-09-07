import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 30,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },

  // Profile
  profileSection: {
    alignItems: 'flex-start',
    marginBottom: 28,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 14,
  },
  userName: {
    fontSize: 19,
    fontWeight: '700',
    color: '#120D26',
  },

  // Menu List
  menuList: {
    marginTop: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  iconWrapper: {
    width: 32,
    position: 'relative',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: 2,
    backgroundColor: '#FF9C37',
    borderRadius: 9,
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  menuLabel: {
    fontSize: 16,
    color: '#120D26',
    fontWeight: '400',
    marginLeft: 12,
  },

  // Upgrade Pro Button
  upgradeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 210, 255, 0.1)',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  upgradeText: {
    color: '#00D2FF',
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 8,
  },
});