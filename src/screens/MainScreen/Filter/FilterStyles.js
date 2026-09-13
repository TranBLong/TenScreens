import { StyleSheet, Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

export default StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000000',
    },
    touchableClose: {
        flex: 1,
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 24,
        height: SCREEN_HEIGHT * 0.82, // Chiếm khoảng 82% chiều cao màn hình
    },
    indicatorContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    indicator: {
        width: 38,
        height: 5,
        backgroundColor: '#E4DFDF',
        borderRadius: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: '400',
        color: '#120D26',
        marginBottom: 20,
    },
    scrollContent: {
        paddingBottom: 20,
    },

    // Categories
    categoryScroll: {
        marginBottom: 24,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    iconCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: '#E4DFDF',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconCircleActive: {
        backgroundColor: '#5669FF',
        borderColor: '#5669FF',
        elevation: 6,
        shadowColor: '#5669FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    categoryLabel: {
        fontSize: 14,
        color: '#120D26',
        fontWeight: '400',
    },
    categoryLabelActive: {
        fontWeight: '600',
    },

    // Section
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#120D26',
        marginBottom: 16,
    },

    // Time Chips
    chipRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    timeChip: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E4DFDF',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    timeChipActive: {
        backgroundColor: '#5669FF',
        borderColor: '#5669FF',
    },
    timeChipText: {
        color: '#747688',
        fontSize: 14,
    },
    timeChipTextActive: {
        color: '#FFFFFF',
        fontWeight: '500',
    },

    // Row Buttons (Calendar, Location)
    actionRowButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#E4DFDF',
        borderRadius: 14,
        padding: 12,
        marginBottom: 24,
    },
    actionRowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: 'rgba(86, 105, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    actionRowText: {
        fontSize: 15,
        color: '#747688',
    },
    actionRowTextValue: {
        fontSize: 15,
        color: '#120D26',
        fontWeight: '500',
    },

    // Price Range
    priceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceValue: {
        fontSize: 16,
        fontWeight: '500',
        color: '#5669FF',
        marginBottom: 16,
    },
    sliderContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
        marginBottom: 30,
    },
    histogram: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 50,
        marginBottom: 10,
    },
    bar: {
        width: 12,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    barActive: {
        backgroundColor: '#5669FF',
        opacity: 0.2,
    },
    barInactive: {
        backgroundColor: '#E4DFDF',
    },
    trackContainer: {
        height: 24,
        justifyContent: 'center',
        position: 'relative',
    },
    trackBackground: {
        height: 2,
        backgroundColor: '#E4DFDF',
        width: '100%',
        position: 'absolute',
    },
    trackActive: {
        height: 2,
        backgroundColor: '#5669FF',
        width: '65%', // Từ 15% đến 80% (khoảng tương đương mock UI)
        position: 'absolute',
        left: '15%',
    },
    thumb: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#5669FF',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#5669FF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },

    // Bottom Buttons
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingBottom: 10,
    },
    resetBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E4DFDF',
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
        marginRight: 10,
    },
    resetBtnText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#120D26',
        letterSpacing: 1,
    },
    applyBtn: {
        flex: 1,
        backgroundColor: '#5669FF',
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
        marginLeft: 10,
        elevation: 4,
        shadowColor: '#5669FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    applyBtnText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
        letterSpacing: 1,
    },
});