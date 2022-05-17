import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

type ButtonProps = {
    onPress: () => void;
    children?: string
}

const Item: React.FC<ButtonProps> = ({
                                         children,
                                         onPress
                                     }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}
export default Item;
