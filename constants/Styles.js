const borderRadius = 24;
const jumboRadius = 110;

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

const Layouts = {
  smallSpacing: 5,
  mediumSpacing: 15,
  largeSpacing: 40,
  smallShadow,
  mediumShadow,
  borderRadius,
  jumboRadius
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

const FontStyles = {
  h1: {
    fontSize: 67.34,
    fontFamily: 'Inter_900Black',
  },
  h2: {
    fontSize: 50.52,
    fontFamily: 'Inter_900Black',
  },
  h3: {
    fontSize: 37.9,
    fontFamily: 'Inter_900Black',
  },
  h4: {
    fontSize: 28.43,
    fontFamily: 'Inter_900Black',
  },
  h5: {
    fontSize: 21.33,
    fontFamily: 'Inter_700Bold'
  }
}

export {
  FontStyles,
  Layouts,
  Colors,
  DefaultTheme,
  DarkTheme
}
