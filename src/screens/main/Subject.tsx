//Main React import
import React, {useState} from 'react';
import {
  TouchableRipple,
  IconButton,
  Portal,
  Modal,
  TextInput,
  Avatar,
  Card,
  Button,
} from 'react-native-paper';
//Our Styles for Project
import {Body} from '../../styles/wrapper';
import {
  LessonTitle,
  LessonSubtitle,
  CourseTitle,
  CourseSubtitle,
} from '../../styles/text';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, FlatList, useWindowDimensions} from 'react-native';
import {useUserData} from '../../states/useData';

const SubjectScreen = ({navigation}) => {
  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand
  const [visible, setVisible] = React.useState(false);

  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [data, setData] = React.useState({
    courseName: '',
    courseDescription: '',
    courseCategory: '',
  });
  const updateName = (name: string) => {
    setData({
      ...data,
      courseName: name,
    });
  };
  const updateDescription = (name: string) => {
    setData({
      ...data,
      courseDescription: name,
    });
  };
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    height: windowHeight,
  };

  const [courses] = useState([
    {name: 'Programming 101', key: '1', description: 8},
    {name: 'Fun Mathematic', key: '2', description: 9},
    {name: 'Physics', key: '3', description: 7},
    {name: 'Microprocessors', key: '4', description: 5},
    {name: 'Programming 101', key: '5', description: 8},
    {name: 'Fun Mathematic', key: '6', description: 9},
    {name: 'Physics', key: '7', description: 7},
    {name: 'Database', key: '8', description: 5},
  ]);

  if (userData.userdata.getUser().getUserType() === 1) {
    return (
      <Body paddings="0px 20px">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
            alignItems: 'center',
          }}>
          <View>
            <CourseSubtitle margins="0px">Hello,</CourseSubtitle>
            <CourseTitle margins="0px">Cafer Y.</CourseTitle>
          </View>
          <Avatar.Image
            size={50}
            source={require('../../../src/assets/ava11.png')}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Card style={{width: windowWidth - 40}}>
            <Card.Cover source={{uri: 'https://picsum.photos/300'}} />
          </Card>
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CourseTitle margins="0px" style={{fontSize: 20}}>
              Last seen courses
            </CourseTitle>
            <IconButton
              icon="plus-circle"
              size={20}
              color="black"
              onPress={() =>
                navigation.navigate('Main', {
                  screen: 'Exam',
                  params: {user: 'jane'},
                })
              }
            />
          </View>
          <FlatList
            style={{marginTop: 20}}
            data={courses}
            renderItem={({item}) => (
              <TouchableRipple
                style={{marginBottom: 20}}
                onPress={() => {}}
                rippleColor="white">
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 2,
                      height: 82,
                      backgroundColor: 'white',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Card style={{width: 40, height: 40, marginTop: 20}}>
                        <Card.Cover
                          style={{width: 40, height: 40, resizeMode: 'cover'}}
                          source={{uri: 'https://picsum.photos/300'}}
                        />
                      </Card>
                    </View>
                  </View>
                  <View style={{flex: 5, height: 82, backgroundColor: 'white'}}>
                    <LessonTitle>{item.name}</LessonTitle>
                    <LessonSubtitle>
                      {item.description} goals were achieved today.
                    </LessonSubtitle>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      height: 82,
                      backgroundColor: 'white',
                      justifyContent: 'center',
                    }}>
                    <IconButton icon="play-circle-outline" size={32} />
                  </View>
                </View>
              </TouchableRipple>
            )}
          />
        </View>
      </Body>
    );
  } else {
    return (
      <Body paddings="0px 20px">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
            alignItems: 'center',
          }}>
          <View>
            <CourseSubtitle margins="0px">Hello,</CourseSubtitle>
            <CourseTitle margins="0px">Cafer Y.</CourseTitle>
          </View>
          <Avatar.Image
            size={50}
            source={require('../../../src/assets/ava11.png')}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Card style={{width: windowWidth - 40}}>
            <Card.Cover source={{uri: 'https://picsum.photos/300'}} />
          </Card>
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CourseTitle margins="0px" style={{fontSize: 20}}>
              Last seen courses
            </CourseTitle>
            <IconButton
              icon="plus-circle"
              size={20}
              color="black"
              onPress={showModal}
            />
          </View>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <Body>
                <IconButton
                  style={{alignSelf: 'flex-end'}}
                  icon="close"
                  onPress={hideModal}
                />
                <CourseTitle margins="10px 0px">Create A Course</CourseTitle>
                <TextInput
                  style={{marginTop: 20}}
                  label="Course Name"
                  value={data.courseName}
                  onChangeText={(val: any) => updateName(val)}
                />
                <TextInput
                  style={{marginTop: 20}}
                  label="Course Description"
                  value={data.courseDescription}
                  onChangeText={(val: any) => updateDescription(val)}
                />
                <View>
                  <DropDownPicker
                    placeholder="Select a category..."
                    // eslint-disable-next-line react-native/no-inline-styles
                    items={[
                      {label: 'Mathematics', value: 'math'},
                      {label: 'Programming', value: 'chem'},
                      {label: 'Engineering', value: 'bio'},
                      {label: 'Physics', value: 'phys'},
                      {label: 'Biology', value: 'code'},
                      {label: 'English', value: 'EN'},
                    ]}
                    placeholderStyle={{color: 'black'}}
                    labelStyle={{color: 'black'}}
                    dropDownMaxHeight={windowHeight / 6}
                    containerStyle={{height: 70,marginTop:20}}
                  />
                </View>
                <Button style={{marginTop:20}}>Submit</Button>
              </Body>
            </Modal>
          </Portal>
          <FlatList
            style={{marginTop: 20}}
            data={courses}
            renderItem={({item}) => (
              <TouchableRipple
                style={{marginBottom: 20}}
                onPress={() => {}}
                rippleColor="white">
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 2,
                      height: 82,
                      backgroundColor: 'white',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Card style={{width: 40, height: 40, marginTop: 20}}>
                        <Card.Cover
                          style={{width: 40, height: 40, resizeMode: 'cover'}}
                          source={{uri: 'https://picsum.photos/300'}}
                        />
                      </Card>
                    </View>
                  </View>
                  <View style={{flex: 5, height: 82, backgroundColor: 'white'}}>
                    <LessonTitle>{item.name}</LessonTitle>
                    <LessonSubtitle>
                      {item.description} goals were achieved today.
                    </LessonSubtitle>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      height: 82,
                      backgroundColor: 'white',
                      justifyContent: 'center',
                    }}>
                    <IconButton icon="play-circle-outline" size={32} />
                  </View>
                </View>
              </TouchableRipple>
            )}
          />
        </View>
      </Body>
    );
  }
};

export default SubjectScreen;
