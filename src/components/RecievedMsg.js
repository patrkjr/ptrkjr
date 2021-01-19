import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from '@react-navigation/native';

import { FontStyles, Colors, Layouts } from '../../constants/Styles';

import { LocalizationContext } from '../navigation/Routes';

const RecievedMsg = ({ msg }) => {
  const { t, locale } = useContext(LocalizationContext);
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
            d="M0 24.898S11 21.5 11 0l10 19.907C8 26.146 0 24.898 0 24.898z"
            fill={colors.cardBackground}
          />
        </Svg>
      </View>
      <Text style={[FontStyles.h5, styles.msg, { color: colors.text, backgroundColor: colors.cardBackground }]}>{t(msg)}</Text>
    </View>
  </View>
}


const styles = StyleSheet.create({
  container: {
    width: 0,
    flex: 1,
    minWidth: '100%',
    flexDirection: 'row',
    marginLeft: Layouts.mediumSpacing,
    paddingRight: Layouts.mediumSpacing,
    marginBottom: Layouts.mediumSpacing,
  },
  animationContainer: {
    flexDirection: 'row',
    ...Layouts.msgAnimation
  },
  svg: {
    marginRight: -10,
    alignSelf: 'flex-end',
  },
  msg: {
    flexDirection: 'row',
    color: Colors.black,
    padding: Layouts.mediumSpacing,
    marginRight: Layouts.mediumSpacing,
    borderRadius: Layouts.borderRadius,
    ...Layouts.smallShadow
  }
})

export default RecievedMsg;
