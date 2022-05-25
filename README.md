# DemoFirebase

# Google

yarn add @react-native-firebase/app

yarn add @react-native-firebase/auth

First Visit this link:  https://rnfirebase.io/auth/social-auth

Then go to Authentication-> Social Auth -> Google

Then click on "google-signIN"

Then install tha package and follow the android guide

Then create a new project on google firebase

Then create a app in project (without SHA key)

After that,

go to ./android -> ./app -> delete debug.ketstore

and then type this cmd "keytool -genkey -v -keystore debug.keystore -alias debug -storepass android -keypass android -keyalg RSA -keysize 2048 -validity 10000"

then paste this "keytool -list -v -keystore debug.keystore" to see SHA key

after finding the SHA key copy that key and go to google firebase console inside app and add fingerprint there paste that SHA key.

then download "google-services.json" file and paste it inside ./app dir

then go to android guide follow only installation part nothing else.

enable google sign in firebase.console inside Authentication

then go to this "https://rnfirebase.io/auth/social-auth"

add this (import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '',//it will in services.json file hint: client type:3
});) in your app

# Facebook

1. Go to this link("https://rnfirebase.io/auth/social-auth").
2. then Facebook and follow the step.
3. hash link genrator: "keytool -exportcert -alias debug -keystore debug.keystore | openssl sha1 -binary | openssl base64".
4. https://github.com/thebergamo/react-native-fbsdk-next
