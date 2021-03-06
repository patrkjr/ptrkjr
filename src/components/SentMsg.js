import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from '@react-navigation/native';

import { FontStyles, Colors, Layouts } from '../../constants/Styles';

const SentMsg = ({ msg }) => {
  const { colors } = useTheme();
  return <View style={styles.container}>
    <View style={styles.animationContainer}>
      <View style={styles.svg}>
        <Svg
          width={21}
          height={25}
          viewBox="0 0 21 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...SvgProps}
        >
          <Path
            d="M21 24.898S10 21.5 10 0L0 19.907c13 6.239 21 4.991 21 4.991z"
            fill={colors.primary}
          />
        </Svg>
      </View>
      <Text style={[FontStyles.h5, {color: colors.background, backgroundColor: colors.primary}, styles.msg]}>{msg}</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    width: 0,
    flex: 1,
    minWidth: '100%',
    paddingLeft: Layouts.jumboSpacing,
    marginBottom: Layouts.mediumSpacing,
  },
  animationContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
    ...Layouts.msgAnimation
  },
  svg: {
    marginLeft: -10,
    alignSelf: 'flex-end',
  },
  msg: {
    flexDirection: 'row',
    padding: Layouts.mediumSpacing,
    borderRadius: Layouts.mediumRadius,
    ...Layouts.smallShadow
  }
})

export default SentMsg;
