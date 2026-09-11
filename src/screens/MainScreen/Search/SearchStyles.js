import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    // Header cố định
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 12,
        backgroundColor: '#FFFFFF',
    },
    backButton: {
        marginRight: 12,
        padding: 4,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '400',
        color: '#120D26',
    },

    // Search input cố định
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    searchIcon: {
        marginRight: 6,
    },
    searchDivider: {
        width: 1,
        height: 20,
        backgroundColor: '#E4DFDF',
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 24,
        color: '#120D26',
        fontWeight: '300',
        paddingVertical: 4,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5669FF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginLeft: 8,
        elevation: 3,
        shadowColor: '#5669FF',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
    filterText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 4,
    },

    // Khung danh sách cuộn tràn màn hình
    listContainer: {
        flex: 1,
    },
    listContent: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 40, // Đảm bảo cuộn tới phần tử cuối mà không bị cấn viền dưới
    },
    eventCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 10,
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#505588',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
    },
    eventImage: {
        width: 80,
        height: 80,
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
        fontWeight: '400',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    eventTitle: {
        color: '#120D26',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 25,
    },
});