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

const ChatWindow = ({ width }) => {
  const { t } = useContext(LocalizationContext);
  const { colors } = useTheme();
  const ref = useRef(null);
  const subject = "Let's get in touch"
  const [messages, setMessages] = useState([]);

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

  useEffect(() => {
    setTimeout(function () {
      addMsg(
        () => <RecievedMsg msg={'hi'}/>
      )
    }, 700);
    setTimeout(function () {
      addMsg(
        () => <RecievedMsg msg={'myNameIs'}/>
      )
    }, 2300);
    setTimeout(function () {
      addMsg(
        () => <RecievedMsg msg={'andImA'}/>
      )
    }, 3500);
    setTimeout(function () {
      addMsg(
        () =>   <FancyText style={styles.jumboHeading}>
                  Product {'\n'}
                  Designer
                </FancyText>
      )
    }, 5000);
    setTimeout(function () {
      addMsg(
        () => <RecievedMsg msg={'sendMeAMsg'}/>
      )
    }, 7500);
  }, []);

  return <View style={[styles.container, { width: width(), backgroundColor: colors.background }]}>
    <View style={styles.listHeaderContainer}>
      <View style={styles.listHeader}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/profile_small.png')}
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
        return item.component();
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
    borderRadius: Layouts.borderRadius,
    ...Layouts.mediumShadow,
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
  jumboHeading: {
    paddingRight: Layouts.mediumSpacing,
    marginBottom: Layouts.mediumSpacing,
    marginLeft: Layouts.mediumSpacing,
    fontStyle: 'italic',
    opacity: 0,
    textTransform: 'upperCase',
    ...Layouts.msgAnimation
  },
  spacer: {
    height: Layouts.mediumSpacing
  }
})

export default ChatWindow;
