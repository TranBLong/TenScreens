import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    mapBackground: {
        ...StyleSheet.absoluteFillObject, // Giúp bản đồ kéo dài tràn 4 mép màn hình
    },
    mapImageBackground: {
        width: '100%',
        height: '100%',
    },
    roadLine: {
        position: 'absolute',
        height: 12,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E1E1E6',
    },
    mapRoadLabel: {
        position: 'absolute',
        top: '30%',
        right: '6%',
        fontSize: 13,
        fontWeight: '700',
        color: '#CBCBD0',
        letterSpacing: 2,
    },
    markerPin: {
        position: 'absolute',
        alignItems: 'center', // Căn mũi tên nằm chính giữa
    },
    markerBadge: {
        backgroundColor: '#FFFFFF',
        padding: 5, // Độ dày của khung màu trắng bao quanh
        borderRadius: 16,
    },
    innerIconBox: {
        width: 32,
        height: 32,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    markerArrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 7,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#FFFFFF', // Cùng màu với badge trắng
        marginTop: -1, // Đè nhẹ 1px để xóa vệt hở giáp ranh
    },

    // Overlays
    overlayContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topSection: {
        width: '100%',
    },
    bottomSection: {
        width: '100%',
        alignItems: 'flex-end',
    },

    // Top Bar
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    searchBox: {
        flex: 1,
        height: 44,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    inlineBackButton: {
        padding: 4,
        marginRight: 6,
    },
    searchInput: {
        flex: 1,
        fontSize: 13,
        color: '#120D26',
        paddingVertical: 0,
    },
    gpsButton: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    // Category Scroll
    categoryScroll: {
        marginTop: 12,
        maxHeight: 44,
    },
    categoryContainer: {
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    categoryPill: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
    },
    categoryLabel: {
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 6,
    },

    // Location FAB (nút tuỳ chọn cạnh card sự kiện)
    myLocationFab: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#5669FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        marginBottom: 12,
        elevation: 5,
        shadowColor: '#5669FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },

    // Event Card
    eventCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 16,
        padding: 10,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        alignSelf: 'stretch',
    },
    eventImage: {
        width: 78,
        height: 78,
        borderRadius: 12,
    },
    eventDetails: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eventDate: {
        fontSize: 13,
        color: '#5669FF',
        fontWeight: '400',
    },
    eventTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#120D26',
        lineHeight: 20, // Giúp khoảng cách giữa các dòng thoáng hơn
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 13,
        color: '#747688',
        marginLeft: 4,
        flex: 1,
    },
});