// COLORS
const Colors = {
  primary: '#0692E2',
  darkPrimary: '#26AAC6',
  secondary: "#8E4FF5",
  darkSecondary: '#E19522',
  white: '#FFFFFF',
  black: '#1B1B1B',
  lightGrey: "#DADADA",
  darkGrey: '#313131',
  mediumOpacityBlack: "rgba(0,0,0,0.15)",
  mediumOpacityWhite: "rgba(255,255,255,0.15)"
}

const DefaultTheme = {
  dark: false,
  colors: {
    primary: Colors.primary,
    secondary: Colors.secondary,
    themedBackgroundGradientStart: Colors.primary,
    themedBackgroundGradientEnd: Colors.secondary,
    background: Colors.white,
    cardBackground: Colors.lightGrey,
    text: Colors.black,
    border: Colors.lightGrey,
    notification: 'rgb(255, 69, 58)'
  }
}

const DarkTheme = {
  dark: true,
  colors: {
    primary: Colors.darkPrimary,
    secondary: Colors.darkSecondary,
    themedBackgroundGradientStart: "#043544",
    themedBackgroundGradientEnd: "#321F02",
    background: Colors.black,
    cardBackground: Colors.darkGrey,
    text: Colors.white,
    border: Colors.lightGrey,
    notification: 'rgb(255, 69, 58)'
  }
}

// LAYOUTS
const smallRadius = 6;
const mediumRadius = 24;
const jumboRadius = 110;
const borderRadius = {
  smallRadius: 6,
  mediumRadius: 24,
  jumboRadius: 110
}

const smallShadow = {
  elevation: 4,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.12,
  shadowRadius: 16,
  shadowColor: '#000'
}

const mediumShadow = {
  elevation: 12,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 30,
  shadowColor: '#000'
}

const animationKeyframes = {
  '0%': {
    opacity: 0,
    top: 40
  },
  '100%': {
    opacity: 1,
    top: 0
  }
}

const msgAnimation = {
  animationKeyframes,
  animationDuration: '300ms',
  animationFillMode: 'both',
}

const themedShadows = {
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.28,
  shadowRadius: 20,
  shadowColor: Colors.primary
};

const Layouts = {
  smallSpacing: 4,
  mediumSpacing: 16,
  largeSpacing: 48,
  jumboSpacing: 80,
  msgAnimation,
  smallShadow,
  mediumShadow,
  ...borderRadius,
  jumboRadius
}

const baseSize = 16;
const fontScale = 1.250;
// FONTSTYLES
const FontStyles = {
  h1: {
    fontSize: 48.83,
    fontFamily: 'Inter_900Black, Sans-Serif',
    fontWeight: '900',
    fontStyle: 'bold'
  },
  h2: {
    fontSize: 39.06,
    fontFamily: 'Inter_900Black, Sans-Serif',
    fontWeight: '900'
  },
  h3: {
    fontSize: 31.25,
    fontFamily: 'Inter_900Black, Sans-Serif',
    fontWeight: '900'
  },
  h4: {
    fontSize: 25,
    fontFamily: 'Inter_900Black, Sans-Serif',
    fontWeight: '900'
  },
  h5: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold, Sans-Serif',
    fontWeight: '700'
  }
}

export {
  FontStyles,
  Layouts,
  Colors,
  DefaultTheme,
  DarkTheme
}
