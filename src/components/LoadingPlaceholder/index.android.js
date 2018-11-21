import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { Colors } from '../../constants';

const LoadingPlaceholder = ({ loading, children }) => (
  <View>
    { loading
      ?
      (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator
            color={Platform.OS === 'android' ? Colors.primary : '#888'}
            size="large"
          />
        </View>
      )
      : children
    }
  </View>
);

export default LoadingPlaceholder;
