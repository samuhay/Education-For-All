//Main React import
import React,{useState} from 'react';
import {
  useTheme,
  ProgressBar,
  Button,
  IconButton,
  Checkbox,
  TouchableRipple,
  Paragraph,
} from 'react-native-paper';
//Our Styles for Project
import {Body, Bottom, Line} from '../../../styles/wrapper';
import {View, Text, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { BigButton } from '../../../styles/buttons';

const ExamScreen = ({navigation}) => {
  const [checked, setChecked] = useState(0);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
        <Line
          alignItems="center"
          justify="center"
          style={{flexWrap: 'nowrap', alignContent: 'flex-start'}}>
          <Button>X</Button>
          <ProgressBar
            progress={0.52}
            color={colors.success}
            style={{width: windowWidth - 120}}
          />
          <IconButton icon="flag" color={colors.success} size={20} />
        </Line>
        <Text style={{paddingTop: 10, color:colors.title1}}>
          Please read the question and answear it by clicking bottom choices.
        </Text>
      </View>
      <Body
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <TouchableRipple
          onPress={() => (checked != 1 ? setChecked(1) : setChecked(0))}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 8,
              paddingHorizontal: 50,
              marginHorizontal: 30,
              backgroundColor: colors.surface,
            }}>
            <Paragraph>Normal</Paragraph>
            <View pointerEvents="none">
              <Checkbox status={checked === 1 ? 'checked' : 'unchecked'} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => (checked != 2 ? setChecked(2) : setChecked(0))}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 8,
              paddingHorizontal: 50,
              marginHorizontal: 30,
              backgroundColor: colors.surface,
            }}>
            <Paragraph>Normal</Paragraph>
            <View pointerEvents="none">
              <Checkbox status={checked === 2 ? 'checked' : 'unchecked'} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => (checked != 3 ? setChecked(3) : setChecked(0))}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 8,
              paddingHorizontal: 50,
              marginHorizontal: 30,
              backgroundColor: colors.surface,
            }}>
            <Paragraph>Normal</Paragraph>
            <View pointerEvents="none">
              <Checkbox status={checked === 3 ? 'checked' : 'unchecked'} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => (checked != 4 ? setChecked(4) : setChecked(0))}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 8,
              paddingHorizontal: 50,
              marginHorizontal: 30,
              backgroundColor: colors.surface,
            }}>
            <Paragraph>Normal</Paragraph>
            <View pointerEvents="none">
              <Checkbox status={checked === 4 ? 'checked' : 'unchecked'} />
            </View>
          </View>
        </TouchableRipple>
      </Body>
      <Body
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <BigButton
          margins={[10, 10, 20, 20]}
          text="Next"
          mode="contained"
          bgColor="success"
          textColor="buttonText1"
          height={60}
          radius="5"
        />
        <BigButton
          margins={[10, 10, 20, 20]}
          text="Exit"
          mode="contained"
          bgColor="error"
          textColor="buttonText1"
          height={60}
          radius="5"
        />
      </Body>
    </SafeAreaView>
  );
};

export default ExamScreen;
