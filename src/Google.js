import {View, Text, Button, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';

const Google = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1052841350048-1i1ki510i05qv3lb49hs6u5gupm1l312.apps.googleusercontent.com',
    });
  }, [data]);
  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then(user => {
        console.log(user.user.displayName);
        setData({
          name: user.user.displayName,
          email: user.user.email,
          image: user.user.photoURL,
        });
      })
      .catch(err => {
        console.log(err.message);
      });
    console.log(data.name);
  }
  function logout() {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        setData([]);
      });
  }

  return (
    <View>
      <Text>App</Text>
      {data.name ? (
        <View>
          <Text>{data.name}</Text>
          <Text>{data.email}</Text>
          <Image
            source={{uri: `${data.image}`}}
            style={{width: 40, height: 40}}
          />
          <Button
            title="logout"
            onPress={() => {
              logout();
            }}
          />
        </View>
      ) : (
        <View>
          <Button
            title="Google Sign-In"
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({});
export default Google;
