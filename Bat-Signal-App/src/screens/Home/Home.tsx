import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./HomeStyle";
import { BatButton } from "../../components/BatButton/BatButton";
import { BatLogo } from "../../components/BatLogo/BatLogo";

 
export function Home() {
  return (
    <View style={styles.homeStyle}>
        <BatLogo />
        <BatButton/>
    </View>
  );
}
