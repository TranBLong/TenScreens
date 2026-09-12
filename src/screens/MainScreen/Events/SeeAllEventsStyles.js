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
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#120D26',
        marginLeft: 12,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 20,
    },

    // Event List
    listContainer: {
        flex: 1,
    },
    listContent: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 30,
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
        width: 90,
        height: 90,
        borderRadius: 12,
    },
    eventInfo: {
        flex: 1,
        paddingLeft: 14,
        justifyContent: 'center',
    },
    eventDate: {
        color: '#5669FF',
        fontSize: 13,
        fontWeight: '400',
        marginBottom: 6,
    },
    eventTitle: {
        color: '#120D26',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 22,
        marginBottom: 8,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        color: '#747688',
        fontSize: 13,
        marginLeft: 4,
        flex: 1,
    },
});