import React from 'react';
import {Image} from 'react-native';
import logo from '../../../assets/logotipo-do-batman.png'
import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <>
        <Image 
        source={logo} style={styles.logo}
        />
    </>
  );
}