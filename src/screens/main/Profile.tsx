/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 * @Taha Kızmaz - Taha Sharheed
 */

import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {HelperText, TextInput, useTheme} from 'react-native-paper';
import {TabView, SceneMap} from 'react-native-tab-view';
import { BigButton } from '../../styles/buttons';
import {NewInput} from '../../styles/input';
import {Body, Bottom, Form} from '../../styles/wrapper';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
);

const SecondRoute = () => {
  const {colors} = useTheme();
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [data, setData] = useState({
    password: '',
    secureTextEntry: true,
    isValidPassword: null,
  });

  const passwordControl = (val: string) => {
    var trimmedInput = val.trim();
    if (
      trimmedInput.length >= 8 &&
      trimmedInput.search(/[0-9]/) > -1 &&
      trimmedInput.search(/[A-Z]/) > -1 &&
      trimmedInput.search(/[a-z]/) > -1 &&
      trimmedInput.search(/[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) > -1
    ) {
      setData({
        ...data,
        password: trimmedInput,
        isValidPassword: true,
      });
    } else if (trimmedInput.length >= 1) {
      setData({
        ...data,
        password: trimmedInput,
        isValidPassword: false,
      });
    } else {
      setData({
        ...data,
        password: '',
        isValidPassword: null,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={[styles.scene]}>
      <Form>
        <NewInput
          label="Name"
          topRadius="15"
          topMargin="5px"
          mode="flat"
          onChangeText={(name) => setName(name)}
          value={name}
          theme={{
            colors: {
              text: colors.primary,
              error: colors.error,
              primary: colors.accent,
              placeholder: colors.placeholder,
              background: colors.input1,
            },
          }}
          left={
            <NewInput.Icon
              name="account"
              color={colors.placeholder}
              size={33}
            />
          }
        />
        <NewInput
          label="Surname"
          mode="flat"
          onChangeText={(surName) => setSurName(surName)}
          value={surName}
          theme={{
            colors: {
              text: colors.primary,
              error: colors.error,
              primary: colors.accent,
              placeholder: colors.placeholder,
              background: colors.input1,
            },
          }}
          left={
            <NewInput.Icon
              name="account"
              color={colors.placeholder}
              size={33}
            />
          }
        />
        <NewInput
          label="Change Password"
          botRadius="15"
          botMargin="5px"
          mode="flat"
          onChangeText={(val: any) => passwordControl(val)}
          onEndEditing={(e: {nativeEvent: {text: any}}) =>
            passwordControl(e.nativeEvent.text)
          }
          value={data.password}
          secureTextEntry={data.secureTextEntry ? true : false}
          error={!data.isValidPassword && data.isValidPassword != null}
          theme={{
            colors: {
              text: colors.primary,
              error: colors.error,
              primary: colors.accent,
              placeholder: colors.placeholder,
              background: colors.input2,
            },
          }}
          left={
            <NewInput.Icon
              name="lock-open"
              color={colors.placeholder}
              size={33}
            />
          }
          right={
            <NewInput.Icon
              name={data.secureTextEntry ? 'eye-off' : 'eye'}
              onPress={updateSecureTextEntry}
              color={colors.placeholder}
            />
          }
        />
        <HelperText
          type="error"
          visible={!data.isValidPassword && data.isValidPassword != null}
          theme={{
            colors: {
              error: colors.error,
            },
          }}>
          Error: Password Schema '1234Az1!'
        </HelperText>
      </Form>
      <Bottom>
        <Form>
          <BigButton
            margins={[0, 10, 0, 0]}
            text="Save"
            mode="contained"
            bgColor="accent"
            textColor="buttonText1"
            onPress=""
          />
        </Form>
      </Bottom>
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const ProfileScreen = ({navigation}) => {
  const {colors} = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Performances'},
    {key: 'second', title: 'Settings'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <Body paddings="10px">
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </Body>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
