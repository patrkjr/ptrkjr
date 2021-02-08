import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
import { LocalizationContext } from '../navigation/Routes';
import ProjectNotFound from '../components/ProjectNotFound';

import DATA from '../../public/data';
import Link from '../components/Link';
import { FontStyles, Layouts } from '../../constants/Styles';

const ProjectDetailsScreen = ({ route, navigation }) => {
  const { params } = route;
  const data = DATA[route.params.slug];
  const { dark, colors } = useTheme();
  const { t } = useContext(LocalizationContext);

  if (!data) {
    return <ProjectNotFound/>
  }
  const theme = dark ? data.themes.darkTheme : data.themes.defaultTheme

  function SvgComponent(props: SvgProps) {
    return (
      <Svg
        style={{ position: 'absolute' }}
        viewBox="0 0 1440 668"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          opacity={0.25}
          d="M0 303.899l48-9.271c48-9.97 144-27.462 240-65.42 96-37.258 192-93.233 288-27.988 96 65.946 192 251.362 288 326.578 96 75.217 192 36.734 288-9.27 96-46.704 192-102.679 240-130.667l48-27.987V80H0v223.899z"
          fill="url(#prefix__paint0_linear)"
        />
        <Path
          opacity={0.25}
          d="M0 668l48-18.502c48-17.811 144-55.852 240-73.663 96-18.502 192-18.502 288-64.67 96-45.478 192-138.852 288-110.667 96 27.148 192 175.856 288 212.169 96 36.312 192-36.313 240-73.836L1440 502V170H0v498z"
          fill="url(#prefix__paint1_linear)"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear"
            x1={720}
            y1={80}
            x2={720}
            y2={570.294}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopOpacity={0} />
            <Stop offset={1} stopOpacity={0.6} />
          </LinearGradient>
          <LinearGradient
            id="prefix__paint1_linear"
            x1={720}
            y1={170}
            x2={720}
            y2={668}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopOpacity={0} />
            <Stop offset={1} stopOpacity={0.6} />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }

  return(
    <View style={{ backgroundColor: theme.background}}>
      {SvgComponent()}
      <View style={[styles.hero, { paddingTop: Layouts.largeSpacing + 60}]}>
        <View style={[styles.content, { flexDirection: 'row', minHeight: '60vh'}]}>
          <View style={styles.titlesContainer}>
            <Text style={[styles.titles, FontStyles.h1, data.font, { color: theme.text, fontSize: 60 }]}>{data.title}</Text>
            <Text style={[styles.titles, FontStyles.h5, { color: theme.text, opacity: 0.6 }]}>{t(data.status)}</Text>
            <Text style={[styles.titles, FontStyles.h2, { color: theme.text }]}>{t(`pitch.${[data.slug]}`)}</Text>
            <View style={[styles.platforms]}>
              {
                data.platforms.map((platform, key) =>
                  <Text style={[styles.platform,  { color: theme.text }]}>{platform}</Text>
              )
              }
            </View>
          </View>
          <View style={styles.imgContainer}>
            <View style={[ styles.img, { backgroundImage: `url(${theme.img})`, backgroundSize: 'cover'}, styles.img]}/>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Layouts.mediumSpacing,
    paddingVertical: Layouts.largeSpacing,
    minHeight: '100vh',
    overflow: 'hidden',
  },
  content: {
    flexWrap: 'wrap',
    marginHorizontal: 'auto',
    maxHeight: 500,
    maxWidth: 768,
  },
  imgContainer: {
    flex: 3, flexDirection: 'row',
    overflow: 'visible',
    paddingTop: Layouts.mediumSpacing,
    minWidth: 320,
  },
  img: {
    flex: 1,
    overflow: 'visible',
    minWidth: '50vw',
    borderRadius: Layouts.mediumSpacing,
    minHeight: "50vh",
    maxHeight: '80vh',
  },
  titlesContainer: {
    flexDirection: 'column',
    flex: 5,
    minWidth: 320,
    paddingTop: Layouts.mediumSpacing,
    paddingRight: Layouts.mediumSpacing,
  },
  titles: {
    marginBottom: Layouts.mediumSpacing,
    hyphens: 'auto',
    wordBreak: 'all'

  },
  platforms: {
    flexDirection: 'row',
  },
  platform: {
    marginRight: Layouts.mediumSpacing,
    ...FontStyles.h5
  }
})

export default ProjectDetailsScreen;
