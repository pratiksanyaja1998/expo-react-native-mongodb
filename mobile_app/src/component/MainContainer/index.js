import React from 'react';
import { Image, ScrollView, View } from 'react-native';

import { Images } from '../../constants';
import styles from './styles';

export default props => {
  const MainView = props.useView || props.useViewOval ? View : ScrollView;
  return (
    <MainView
      style={[styles.container, props.useView && styles.containerUseView, props.useViewOval && { zIndex: -999 }]}
      {...props}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
      ref={props.viewRef}
    >
      <View style={[props.useView && styles.viewOval, props.isWallet ? styles.topOvalWallet : props.isCheckoutOrdering ? styles.checkoutOrderingOvalWallet : styles.topOval]} />
      {props.showLogo && <Image style={styles.logoImage} source={Images.logo} />}
      <View style={[styles.childrenContainer, props.useView && { paddingBottom: 0 }]}>{props.children}</View>
    </MainView>
  );
};
