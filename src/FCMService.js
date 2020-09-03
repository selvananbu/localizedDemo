import FireBase from 'react-native-firebase';
import type {Notification,NotificationOpen} from 'react-native-firebase';

class FCMService {
    register = (onRegister,onNotification,onOpenNotification) =>{
        this.checkPermission(onRegister)
        this.cerateNotificationListeners(onNotification,onOpenNotification)
    }
    checkPermission = (onRegister) => {
        firebase.messaging().hasPermission()
        .then(enabled => {
            if(enabled){
                this.getToken(onRegister)
            }
        }).catch(error=> {
            console.log("Permission rejected",error);
        })
    }

    getToken = (onRegister) => {
        firebase.messaging().getToken()
        .then(fcmToken => {
            if(fcmToken){
                onRegister(fcmToken)
            }else{
                console.log("User does not have a device token");
            }
        }).catch(error => {
            console.log("getToken rejected",error);
        })
    }

    requestPermission = (onRegister) => {
        firebase.messaging().requestPermission()
        .then(() => {
            this.getToken(onRegister)
        }).catch(error =>{
            console.log("Request Permission rejected",error);
        })
    }

    deleteToken = () => {
        firebase.messaging().deleteToken()
        .catch(error => {
            console.log("Delete token error",error);
        })
    }

    

    createNotificationListeners = (onNotification, onOpenNotification) => {
            this.notificationListener = firebase.notifications()
            .onNotification(notification: Notification) => {
                onNotification(notification)
            }
    }

    this.notificationOpenedListener = firebase.notifications()
    .onNotificationOpened((notificationOpen: NotificationOpen)) => {
        onOpenNotification(notification)
    }

    firebase.notification().getInitialNotification()
    .then(notification => {
        if(notification){
            const notification: Notification = notificationOpen.notification
            onOpenNotification(notification)
        }
    })

    this.messageListener = firebase.messaging().onMessage((message) => {
        onNotification(message)
    })

    this.onTokenRefreshListener =firebase.messaging().onTokenRefresh(fcmToken => {
        console.log("New token:",fcmToken);
    })

    unRegister = () => {
        this.messageListener();
        this.notificationListener();
        this.onTokenRefreshListener();
        this.notificationOpenedListener();
    }

    buildChannel = (obj) => {
        return new firebase.notifications.Android.Channel(
            obj.channelID,obj.channelName,
            firebase.notifications.Android.Importance.High)
            .setDecription(obj.channelDes)
        )
    }

    buildNotification = (obj) =>{
        firebase.notifications().android.createChannel(obj.channel)

        return new firebase.notifications.Notification()
        .setSound(obj.sound)
        .setNotificationId(obj.dataId)
        .setTitle(obj.title)
        .setBody(obj.content)
        .setData(obj.data)
        .android.setChannelId(obj.channel.channelID)
        .android.setLargeIcon(obj.largeIcon)
        .android.setSmallcon(obj.smallIcon)
        .android.setColor(obj.colorBgIcon)
        .android.setPriority(firebase.notifications.Android.Priority.High)
        .android.setVibrate(obj.vibrate)
        
    }

    sche
}