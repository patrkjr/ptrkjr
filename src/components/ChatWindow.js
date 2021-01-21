import React, { useRef, useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Linking } from 'react-native';
import { LocalizationContext } from '../navigation/Routes';
import { useTheme } from '@react-navigation/native';

import { Layouts, FontStyles, Colors } from '../../constants/Styles';
import ReplyField from './ReplyField';
import FancyText from './FancyText';
import Separator from './Separator';
import RecievedMsg from './RecievedMsg';
import SentMsg from './SentMsg';
import Bubbles from './Bubbles';

const ChatWindow = ({ width }) => {
  const { t } = useContext(LocalizationContext);
  const { colors } = useTheme();
  const ref = useRef(null);
  const [messages, setMessages] = useState([]);

  const ProductDesigner = () => {
    const [showBubbles, setShowBubbles] = useState(true);
    useEffect(() => {
      setTimeout(() => setShowBubbles(false), 2500);
    },[])
    if (showBubbles) {
      return <Bubbles />
    }
    return <View style={styles.animationContainer}>
      <FancyText style={styles.jumboHeading}>
        Product Designer
      </FancyText>
    </View>
  }

  const Msg = ({ msg, delay }) => (
    <RecievedMsg msg={msg} delay={delay}/>
  )

  function addMsg (msg) {
      setMessages( prevState => [
        ...prevState,
        {
          id: prevState.length.toString(),
          component:
          () => (
            msg()
          )
        }
      ])
  }
  let startMsg = 700;
  useEffect(() => {
    setTimeout(function () {
      addMsg(
        () => <Msg msg={'hi'} delay={1200}/>
      )
    }, startMsg);
    setTimeout(function () {
      addMsg(
        () => <Msg msg={'myNameIs'} delay={2500}/>
      )
    }, startMsg += 2000);
    setTimeout(function () {
      addMsg(
        () => <Msg msg={'andImA'} delay={2500}/>
      )
    }, startMsg += 3200);
    setTimeout(function () {
      addMsg(
        () => <ProductDesigner/>
        )
    }, startMsg += 3500);
    setTimeout(function () {
      addMsg(
        () => <Msg msg={'sendMeAMsg'} delay={3500}/>
      )
    }, startMsg += 3000);
  }, []);

  return <View style={[styles.container, { width: width(), backgroundColor: colors.background }]}>
    <View style={styles.listHeaderContainer}>
      <View style={styles.listHeader}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/profile_small.jpeg')}
        />
        <Text style={[FontStyles.h5, { color: colors.text, marginLeft: Layouts.mediumSpacing }]}>Patrick</Text>
      </View>
      <Separator/>
    </View>
    <FlatList
      data={messages}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ref={ref}
      onContentSizeChange={()=> ref.current.scrollToEnd()}
      ListHeaderComponent={() => <View style={styles.spacer}/>}
      ListFooterComponent={() => <View style={styles.spacer}/>}
      renderItem={({ item }) => {
        return <View style={styles.item}>
          {item.component()}
        </View>
      }}
    />
    <ReplyField onSubmit={(msg) => {
      Linking.openURL(`mailto:patrick.jessen@icloud.com?subject=${t('letsTalk')}&body=${msg}`);
      // Posing a msg DISABLED as the code currently tries to create an email
      // addMsg(
      //   () => <SentMsg msg={msg}/>
      // );
    }}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: Layouts.mediumRadius,
    ...Layouts.mediumShadow,
  },
  item: {
    paddingHorizontal: Layouts.mediumSpacing,
  },
  listHeaderContainer: {
    paddingHorizontal: Layouts.mediumSpacing
  },
  listHeader: {
    paddingVertical: Layouts.mediumSpacing,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 250,
  },
  animationContainer: {
    paddingRight: Layouts.jumboSpacing,
    marginBottom: Layouts.mediumSpacing,
    ...Layouts.msgAnimation
  },
  jumboHeading: {
    paddingLeft: Layouts.smallSpacing,
    fontStyle: 'italic',
    textTransform: 'upperCase',
  },
  spacer: {
    height: Layouts.mediumSpacing
  }
})

export default ChatWindow;
