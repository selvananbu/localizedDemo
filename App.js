import React, { Component } from 'react';
import PushController from './PushController';
import { SafeAreaView, StyleSheet, Dimensions, View, Text, StatusBar, Button} from 'react-native';

import {Picker} from '@react-native-community/picker';
import strings from './localize';
import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
// Dummy data for list, we'll replace this with data received from push
let pushData = [
  {
    title: "First push",
    message: "First push message"
  },
  {
    title: "Second push",
    message: "Second push message"
  }
]

_renderItem = ({ item }) => (
  <View key={item.title}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.message}>{item.message}</Text>
  </View>
);

class App extends Component{

    onLanguageChanged(itemValue){
    console.log("sdcesc",itemValue);
    this.setState({language: itemValue})
    strings.setLanguage(itemValue);
    
  }
  constructor(props){
    super(props)
    this.state={
      language:"en"
    }
    this.onLanguageChanged = this.onLanguageChanged.bind(this);
  }
  render(){
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <StatusBar barStyle="dark-content" />
        <Text>
          {strings[11110024]}
        </Text>
        <View style={styles.settingcontainer}>
        <Text>
          Languages
        </Text>
        <Picker
            selectedValue={this.state.language}
            style={{height: Dimensions.get("screen").height * .05, width: Dimensions.get("screen").width * 0.85}}
            onValueChange={(itemValue, itemIndex) =>
              this.onLanguageChanged(itemValue)

            }>
            <Picker.Item label="English" value="en" />
            <Picker.Item label="German" value="deu" />
            <Picker.Item label="Italian" value="it" />
          </Picker>

        </View>
    
        <View style={styles.serverbuttoncontainer}>
              <Button title="Update Texts" onPress={() => this.getServerTexts()}/>
        </View>
      
      </SafeAreaView>
      <PushController/>
    </View>
  );
    }
};

const styles = StyleSheet.create({
  scrollView: {backgroundColor: Colors.lighter,},
  listHeader:{ backgroundColor: '#eee', color: "#222", height: 44, padding: 12},
  title:{fontSize: 18, fontWeight: 'bold', paddingTop: 10},
  message:{ fontSize: 14, paddingBottom: 15, borderBottomColor: "#ccc", borderBottomWidth: 1},
  engine: { position: 'absolute', right: 0,},
  body: { backgroundColor: Colors.white, paddingHorizontal: 20, paddingVertical: 10, },
  sectionContainer: { marginTop: 32, paddingHorizontal: 24, },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: Colors.black},
  sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400', color: Colors.dark,},
  highlight: { fontWeight: '700'},
  footer: { color: Colors.dark, fontSize: 12, fontWeight: '600', padding: 4, paddingRight: 12, textAlign: 'right',},
    scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  settingcontainer:{
    width:Dimensions.get("screen").width * .90,
    height:Dimensions.get("screen").height * .2,
    marginTop:Dimensions.get("screen").height*.3
  },
  serverbuttoncontainer:{
    width:Dimensions.get("screen").width * .90,
    height:Dimensions.get("screen").height * .10
  }
});

export default App;




// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import {Picker} from '@react-native-community/picker';
// import strings from './localize';

// import PushNotificationIOS from "@react-native-community/push-notification-ios";
// var PushNotification = require("react-native-push-notification");

// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },  // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:", notification);

//     // process the notification

//     // (required) Called when a remote is received or opened, or local notification is opened
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },
//     // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//     onAction: function (notification) {
//       console.log("ACTION:", notification.action);
//       console.log("NOTIFICATION:", notification);
  
//       // process the action
//     },
  
//     // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//     onRegistrationError: function(err) {
//       console.error(err.message, err);
//     },
  
//     // IOS ONLY (optional): default: all - Permissions to register.
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },
  
//     // Should the initial notification be popped automatically
//     // default: true
//     popInitialNotification: true,
  
//     /**
//      * (optional) default: true
//      * - Specified if permissions (ios) and token (android and ios) will requested or not,
//      * - if not, you must call PushNotificationsHandler.requestPermissions() later
//      * - if you are not using remote notification or do not have Firebase installed, use this:
//      *     requestPermissions: Platform.OS === 'ios'
//      */
//     requestPermissions: Platform.OS === 'ios',
//   });



//   componentDidMount(){
//     console.log(strings.getInterfaceLanguage(),strings.getLanguage());
//     this.setState({language:strings.getLanguage ()})
//   }

//   getServerTexts(){
//         strings.setContent(Object.assign({},strings.getContent(),
//     {
//       en:{
//         boiledEgg:"Boiled eggsie"
//       }
//     }));
//     this.setState({})
//     PushNotification.localNotificationSchedule({
//       //... You can use all the options from localNotifications
//       message: "My Notification Message", // (required)
//       date: new Date(Date.now() + 60 * 1000), // in 60 secs
//       allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
//     });



  
//   }

//   render(){
//   return (
//       <SafeAreaView style={{flex:1,alignItems:"center",justifyContent:"center"}}>

//       </SafeAreaView>
//   )
//   }
// }


// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   settingcontainer:{
//     width:Dimensions.get("screen").width * .90,
//     height:Dimensions.get("screen").height * .2,
//     marginTop:Dimensions.get("screen").height*.3
//   },
//   serverbuttoncontainer:{
//     width:Dimensions.get("screen").width * .90,
//     height:Dimensions.get("screen").height * .10
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
