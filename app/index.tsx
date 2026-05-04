import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/theme';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native';

const CalculatorApp = () => {
    const {
        // Props
        formula,
        prevNumber,

        // Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,

        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult,
    } = useCalculator();
    return (
        <View style={globalStyles.calculatorContainer}>

            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>{formula}</ThemeText>
                {formula === prevNumber ? (<ThemeText variant='h2'> </ThemeText>) : (<ThemeText variant='h2'>{prevNumber}</ThemeText>)}
            </View >


            <View style={globalStyles.row}>
                <CalculatorButton label='C' color={Colors.lightGray} blackText onPress={() => { clean() }} />
                <CalculatorButton label='+/-' color={Colors.lightGray} blackText onPress={() => { toggleSign() }} />
                <CalculatorButton label='⌫' color={Colors.lightGray} blackText onPress={() => { deleteLast() }} />
                <CalculatorButton label='÷' color={Colors.orange} onPress={() => { divideOperation }} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='7' color={Colors.lightGray} blackText onPress={() => { buildNumber('7') }} />
                <CalculatorButton label='8' color={Colors.lightGray} blackText onPress={() => { buildNumber('8') }} />
                <CalculatorButton label='9' color={Colors.lightGray} blackText onPress={() => { buildNumber('9') }} />
                <CalculatorButton label='x' color={Colors.orange} onPress={() => { multiplyOperation() }} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='4' color={Colors.lightGray} blackText onPress={() => { buildNumber('4') }} />
                <CalculatorButton label='5' color={Colors.lightGray} blackText onPress={() => { buildNumber('5') }} />
                <CalculatorButton label='6' color={Colors.lightGray} blackText onPress={() => { buildNumber('6') }} />
                <CalculatorButton label='-' color={Colors.orange} onPress={() => { subtractOperation() }} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='1' color={Colors.lightGray} blackText onPress={() => { buildNumber('1') }} />
                <CalculatorButton label='2' color={Colors.lightGray} blackText onPress={() => { buildNumber('2') }} />
                <CalculatorButton label='3' color={Colors.lightGray} blackText onPress={() => { buildNumber('3') }} />
                <CalculatorButton label='+' color={Colors.orange} onPress={() => { addOperation() }} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='0' doubleSize color={Colors.lightGray} blackText onPress={() => { buildNumber('0') }} />
                <CalculatorButton label='.' color={Colors.lightGray} blackText onPress={() => { buildNumber('.') }} />
                <CalculatorButton label='=' color={Colors.orange} onPress={() => { calculateResult() }} />
            </View>
        </View>



    )
}

export default CalculatorApp