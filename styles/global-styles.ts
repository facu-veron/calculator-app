import { Colors } from '@/constants/theme';
import { StyleSheet } from 'react-native';



export const globalStyles = StyleSheet.create({
    Background: {
        backgroundColor: Colors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calculatorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
    },
    mainResult: {
        fontSize: 70,
        fontWeight: '400',
        textAlign: 'right',
        color: Colors.textPrimary,
    },
    subResult: {
        fontSize: 40,
        fontWeight: '300',
        textAlign: 'right',
        color: Colors.textSecondary,
    },
})
