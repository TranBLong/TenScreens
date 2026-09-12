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

    // ---------- Header ----------
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 24,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#120D26',
        marginLeft: 14,
    },

    // ---------- Tabs ----------
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#F7F7F9', // Màu nền xám nhạt cho nguyên cụm tab
        borderRadius: 30,
        marginHorizontal: 36,
        padding: 4,
        marginBottom: 20,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 30,
    },
    activeTab: {
        backgroundColor: '#FFFFFF',
        elevation: 2, // Bóng đổ cho Android
        shadowColor: '#000000', // Bóng đổ cho iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
    tabText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#9E9E9E',
    },
    activeTabText: {
        color: '#5669FF', // Màu xanh chủ đạo
    },

    // ---------- Empty Content ----------
    emptyContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginTop: -40, // Kéo toàn bộ cụm nội dung lên trên 1 chút cho cân đối với màn hình
    },
    emptyImage: {
        width: 200,
        height: 200,
        marginBottom: 32,
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#120D26',
        marginBottom: 12,
    },
    emptySubtitle: {
        fontSize: 15,
        color: '#747688',
        textAlign: 'center',
        lineHeight: 24,
    },

    // ---------- Bottom Button ----------
    bottomContainer: {
        paddingHorizontal: 40,
        paddingBottom: 40,
    },
    exploreButton: {
        backgroundColor: '#5669FF',
        height: 56,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: '#5669FF',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        position: 'relative', // Để arrowCircle có thể dùng absolute
    },
    exploreButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 1,
    },
    arrowCircle: {
        position: 'absolute',
        right: 14,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#3D56F0', // Màu vòng tròn trong nút (tương tự như màn hình Buy Ticket)
        justifyContent: 'center',
        alignItems: 'center',
    },
});