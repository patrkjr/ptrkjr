const borderRadius = 24;


const Colors = {
  primary: '#0692E2',
  secondary: "#8D4EF4",
  white: '#FFFFFF'
}

const Layouts = {
  smallSpacing: 5,
  mediumSpacing: 15,
  largeSpacing: 40,
  mediumShadow,
  borderRadius
}

const mediumShadow = {
  elevation: 4,
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.12,
  shadowRadius: 20,
  shadowColor: '#000'
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
