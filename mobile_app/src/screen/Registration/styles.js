import { StyleSheet } from 'react-native';

import { Colors } from '../../../constants';
// import { setValue, setXAxisValue, setYAxisValue } from '../../../utils';
import { Dimensions, Platform } from 'react-native';

// import { iphoneMaxHeight, iphoneMaxWidth } from '../constants/Layout';

const { width, height } = Dimensions.get('window');

export const screenWidth = Platform.OS === 'web' ? 414 : width;

export const screenHeight = Platform.OS === 'web' ? 896 : height;

export const setYAxisValue = value => {
  const ratio = screenHeight / screenHeight;
  return ratio * value;
};

export const setValue = value => {
  const ratio = (screenHeight * screenWidth) / (screenHeight * screenWidth);
  return ratio * value;
};

export const setXAxisValue = value => {
  const ratio = screenWidth / screenWidth;
  return ratio * value;
};

// black: '#000',
// black20: '#131313',
// black40: '#585858',
// black60: '#313131',
// border: '#ccc',
// primary_color: primaryColor,
// secondary_color: secondaryColor,
// color30: '#B4B9B9',
// color50: '#f8f8f8',
// dark_yellow: '#D7AD01',
// facebook: '#3b5998',
// member_QR_code_BGColor: '#FBAE21',
// overlay: 'rgba(0,0,0,0.7)',
// tab_icon_default: '#ccc',
// tab_icon_selected: '#111',
// theme_color: themeColor,
// green: '#008000',
// wallet_card_orange: '#FCA218',
// wallet_card_red: '#E64026',
// white: '#fff',
// white_cream: '#F7F7F7',
// white_gray: '#F3F3F3'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    color: '#000',
    height: setValue(50),
    padding: 0,
    flex: 1,
    paddingHorizontal: setXAxisValue(5),
    marginBottom: setYAxisValue(10),
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8
  },
  textInputContainer: {
    height: setValue(60)
  },
  inputRightSide: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: setValue(5),
    alignSelf: 'center',
    top: setValue(10),
    elevation: 10
  },
  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  registerButton: {
    marginVertical: setYAxisValue(25)
  },
  agreeText: {
    fontSize: setXAxisValue(12),
    color: '#B4B9B9',
    fontFamily: 'Roboto-Bold'
  },
  termAndConText: {
    fontSize: setXAxisValue(12),
    fontFamily: 'Roboto-Bold'
  },
  datePickerContainer: {
    flexDirection: 'row'
  },
  dateInput: {
    width: '15%',
    marginRight: setXAxisValue(10),
    height: setValue(60)
  },
  marqueeText: {
    width: '75%',
    color: '#B4B9B9',
    alignSelf: 'center'
  },
  marqueeContainer: {
    height: setValue(50),
    padding: 0,
    flex: 1,
    paddingHorizontal: setXAxisValue(5),
    marginBottom: setYAxisValue(10),
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  calendarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: setValue(50),
    right: setXAxisValue(10),
    elevation: 10
  },
  yearInput: {
    width: '20%',
    marginRight: setXAxisValue(10),
    height: setValue(60)
  }
});
