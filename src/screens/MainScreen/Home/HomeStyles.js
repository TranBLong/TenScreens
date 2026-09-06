import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },

  // Header
  header: {
    backgroundColor: '#5B4FF0',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationBox: {
    alignItems: 'center',
  },
  locationLabel: {
    color: '#D8D4FF',
    fontSize: 11,
  },
  locationValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  // Search
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#1A1A2E',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    height: 44,
    paddingHorizontal: 12,
    marginLeft: 10,
  },
  filterText: {
    color: '#5B4FF0',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },

  // Categories
  categoryRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    opacity: 0.85,
  },
  categoryPillActive: {
    opacity: 1,
  },
  categoryLabel: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 6,
  },

  // Section header (dùng chung cho Upcoming Events & Nearby You)
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  seeAll: {
    fontSize: 13,
    color: '#5B4FF0',
    fontWeight: '600',
  },

  // Event cards
  eventListContent: {
    paddingLeft: 20,
    paddingRight: 8,
  },
  eventCard: {
    width: 170,
    marginRight: 14,
    borderRadius: 16,
    backgroundColor: '#F7F7FB',
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 110,
  },
  eventDateBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: 'center',
  },
  eventDateNum: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FF7A59',
  },
  eventDateMonth: {
    fontSize: 9,
    color: '#8A8AA3',
  },
  eventInfo: {
    padding: 10,
  },
  eventTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  eventGoing: {
    fontSize: 11,
    color: '#8A8AA3',
    marginTop: 6,
  },

  // Invite banner
  inviteBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2EC5E9',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 18,
    padding: 18,
  },
  inviteTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  inviteSubtitle: {
    color: '#EAFBFF',
    fontSize: 12,
    marginTop: 2,
  },
  inviteButton: {
    backgroundColor: '#00C2D1',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 10,
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },

  // Bottom tab
  bottomTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EFEFF5',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 10,
    color: '#8A8AA3',
    marginTop: 2,
  },
  fab: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#5B4FF0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -28,
    elevation: 4,
  },
});