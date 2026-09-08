import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        paddingBottom: 110,
    },
    bannerImage: {
        width: '100%',
        height: 240,
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 12,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBtn: {
        marginRight: 12,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '500',
    },
    bookmarkBtn: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Floating Attendees Card
    attendeesCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 36,
        marginTop: -25,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 30,
        elevation: 8,
        shadowColor: '#505588',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
    },
    leftGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarStack: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    goingText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#3F38DD',
    },
    inviteBtn: {
        backgroundColor: '#5669FF',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 7,
    },
    inviteText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
    },

    // Content Container
    contentContainer: {
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    eventTitle: {
        fontSize: 35,
        fontWeight: '400',
        color: '#120D26',
        marginBottom: 20,
        lineHeight: 34,
    },

    // Info Row (Date & Location)
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: 'rgba(86, 105, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    infoTextContainer: {
        flex: 1,
    },
    infoTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#120D26',
        marginBottom: 2,
    },
    infoSubtitle: {
        fontSize: 12,
        color: '#747688',
    },

    // Organizer
    organizerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        marginTop: 4,
    },
    organizerAvatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 12,
    },
    organizerTextContainer: {
        flex: 1,
    },
    organizerName: {
        fontSize: 15,
        fontWeight: '400',
        color: '#120D26',
    },
    organizerRole: {
        fontSize: 12,
        color: '#747688',
        marginTop: 2,
    },
    followBtn: {
        backgroundColor: 'rgba(86, 105, 255, 0.1)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
    },
    followingBtn: {
        backgroundColor: '#5669FF',
    },
    followBtnText: {
        color: '#5669FF',
        fontSize: 12,
        fontWeight: '400',
    },
    followingBtnText: {
        color: '#FFFFFF',
    },

    // About Section
    aboutSection: {
        marginTop: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#120D26',
        marginBottom: 8,
    },
    aboutDescription: {
        fontSize: 16,
        color: '#3C3E56',
        lineHeight: 28,
    },

    // Bottom Floating Bar & Gradient Fade
    bottomBarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    fadeGradient: {
        height: 50,
        width: '100%',
    },
    bottomBar: {
        paddingHorizontal: 40,
        paddingBottom: 24,
        paddingTop: 4,
        backgroundColor: '#FFFFFF',
    },
    buyTicketBtn: {
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
        position: 'relative',
        width: '80%',
        alignSelf: 'center',
    },
    buyTicketText: {
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
        backgroundColor: '#3D56F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
});