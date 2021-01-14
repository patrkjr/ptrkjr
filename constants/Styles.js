const borderRadius = 24;


const Colors = {
  primary: '#0692E2',
  secondary: "#8D4EF4",
  white: '#FFFFFF',
  black: '#1B1B1B',
  lightGrey: "#DADADA",
  mediumOpacityBlack: "rgba(0,0,0,0.15)"
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
  borderRadius
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
  Colors
}
