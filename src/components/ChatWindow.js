import React, { useRef, useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Linking } from 'react-native';
import { LocalizationContext } from '../navigation/Routes';

import { Layouts, FontStyles, Colors } from '../../constants/Styles';
import ReplyField from './ReplyField';
import Separator from './Separator';
import RecievedMsg from './RecievedMsg';
import SentMsg from './SentMsg';

const ChatWindow = ({ width }) => {
  const { t } = useContext(LocalizationContext);
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
        () =>   <Text style={[FontStyles.h1, styles.jumboHeading]}>
                  Product {'\n'}
                  Designer
                </Text>
      )
    }, 5000);
    setTimeout(function () {
      addMsg(
        () => <RecievedMsg msg={'sendMeAMsg'}/>
      )
    }, 7500);
  }, []);

  return <View style={[styles.container, { width: width() }]}>
    <View style={styles.listHeaderContainer}>
      <View style={styles.listHeader}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/profile_small.png')}
        />
        <Text style={[FontStyles.h5, { color: Colors.black, marginLeft: Layouts.mediumSpacing }]}>Patrick</Text>
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

const demo = {
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
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
    color: Colors.primary,
    flexGrow: 1,
    paddingRight: Layouts.mediumSpacing,
    marginBottom: Layouts.mediumSpacing,
    marginLeft: Layouts.mediumSpacing,
    fontStyle: 'italic',
    opacity: 0,
    textTransform: 'upperCase',
    animationKeyframes: demo,
    animationDuration: '2s',
    animationFillMode: 'both'
  },
  spacer: {
    height: Layouts.mediumSpacing
  }
})

export default ChatWindow;
