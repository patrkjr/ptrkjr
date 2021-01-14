import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { SvgProps, Path } from 'react-native-svg';

import { FontStyles, Colors, Layouts } from '../../constants/Styles';

const SentMsg = ({ msg }) => {
  return <View style={styles.container}>
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
          fill={Colors.primary}
        />
      </Svg>
    </View>
    <Text style={[FontStyles.h5, styles.msg]}>{msg}</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    marginHorizontal: Layouts.mediumSpacing,
    marginBottom: Layouts.mediumSpacing,
  },
  svg: {
    marginLeft: -10,
    alignSelf: 'flex-end',
  },
  msg: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    color: Colors.white,
    padding: Layouts.mediumSpacing,
    borderRadius: Layouts.borderRadius,
    ...Layouts.smallShadow
  }
})

export default SentMsg;
