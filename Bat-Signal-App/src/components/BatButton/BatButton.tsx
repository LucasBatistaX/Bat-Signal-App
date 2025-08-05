import {Text, Pressable, TouchableOpacity } from 'react-native';
import { styles } from './BatButtonStyles';



export function BatButton() {
  return (
    <>
        <TouchableOpacity 
        style={styles.button}>
            <Text style={styles.text}>
                Active Batman signal
            </Text>
        </TouchableOpacity>
    </>
  );
}
