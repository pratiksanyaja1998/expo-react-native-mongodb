import { Platform, StyleSheet } from 'react-native';

import { Colors, Layout } from '../../constants';
import { setXAxisValue, setYAxisValue } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: setXAxisValue(Platform.select({ ios: 15, android: 0, web: 15 })),
    backgroundColor: Colors.white_gray
  },
  childrenContainer: {
    flex: 1,
    paddingHorizontal: setXAxisValue(Platform.select({ ios: 0, android: 15, web: 0 })),
    paddingBottom: setYAxisValue(50)
  },
  containerUseView: {
    flex: 1,
    zIndex: -999,
    backgroundColor: Colors.white_gray
  },
  topOval: {
    flex: 1,
    backgroundColor: Colors.theme_color,
    width: Layout.window.width * 2,
    height: Layout.window.width * 2,
    borderRadius: Layout.window.width,
    top: -Layout.window.width * 1.5,
    alignSelf: 'center',
    position: 'absolute'
  },
  topOvalWallet: {
    flex: 1,
    backgroundColor: Colors.theme_color,
    width: Layout.window.width * 2,
    height: Layout.window.width * 2,
    borderRadius: Layout.window.width,
    top: -Layout.window.width * 1.2,
    alignSelf: 'center',
    position: 'absolute'
  },
  checkoutOrderingOvalWallet: {
    flex: 1,
    backgroundColor: Colors.theme_color,
    width: Layout.window.width * 2,
    height: Layout.window.width * 2,
    borderRadius: Layout.window.width,
    top: -Layout.window.width * 1.48,
    alignSelf: 'center',
    position: 'absolute'
  },
  logoImage: {
    marginVertical: setYAxisValue(40),
    width: setXAxisValue(120),
    height: setXAxisValue(120),
    alignSelf: 'center'
  },
  viewOval: {
    top: -Layout.window.width * 1.8
  }
});
