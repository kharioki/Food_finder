import React, {createRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import ImagePicker from 'react-native-image-crop-picker';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

export default EditProfile = () => {
  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/100/abott@adorable.png',
  );

  const {colors} = useTheme();

  const bs = createRef();
  let fall = new Animated.Value(1);

  // take photo from camera
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  // choose photo from library
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  const renderInner = () => (
    <View style={[styles.panel, {backgroundColor: colors.background}]}>
      {/** header */}
      <View style={{alignItems: 'center'}}>
        <Text style={[styles.panelTitle, {color: colors.text}]}>
          Upload Photo
        </Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      {/** buttons */}
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={[styles.header, {backgroundColor: colors.background}]}>
      <View style={styles.panelHeader}>
        <View
          style={[styles.panelHandle, {backgroundColor: colors.text}]}></View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />

      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.15, Animated.multiply(fall, 1.0)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Tony Stark
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} color={colors.text} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} color={colors.text} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" size={20} color={colors.text} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" size={20} color={colors.text} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" size={20} color={colors.text} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="map-pin" size={20} color={colors.text} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
