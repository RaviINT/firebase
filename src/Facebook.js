import {View, Text, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
const Facebook = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Facebook Login </Text>
      <Button
        title={'Login with Facebook'}
        onPress={() => {
          LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            function (result) {
              if (result.isCancelled) {
                alert('Login Cancelled ' + JSON.stringify(result));
              } else {
                alert(
                  'Login success with  permisssions: ' +
                    result.grantedPermissions.toString(),
                );
                alert('Login Success ' + result.toString());
              }
            },
            function (error) {
              alert('Login failed with error: ' + error);
            },
          );
        }}
      />
    </View>
  );
};

export default Facebook;
