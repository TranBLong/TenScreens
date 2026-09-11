import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAFAFA', // Màu nền nhạt để nổi bật các card trắng
    },
    container: {
        flex: 1,
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
    },
    backButton: {
        marginRight: 12,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#120D26',
    },

    // Search Input
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchDivider: {
        width: 1,
        height: 24,
        backgroundColor: '#5669FF',
        marginHorizontal: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 20,
        color: '#120D26',
        fontWeight: '400',
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5669FF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginLeft: 10,
        elevation: 3, // Bóng cho android
        shadowColor: '#5669FF', // Bóng cho iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    filterText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 6,
    },

    // Event List
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    eventCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 10,
        marginBottom: 16,
        elevation: 2, // Bóng cho android
        shadowColor: '#505588', // Bóng cho iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
    },
    eventImage: {
        width: 86,
        height: 86,
        borderRadius: 12,
    },
    eventInfo: {
        flex: 1,
        paddingLeft: 14,
        justifyContent: 'center',
    },
    eventDate: {
        color: '#5669FF',
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    eventTitle: {
        color: '#120D26',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
    },
});