import React from 'react';
import { View } from 'react-native';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingPlaceholder = ({ loading, children }) => (
  <View>
    { loading
      ?
      (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress color="primary" />
        </View>
      )
      : children
    }
  </View>
);

export default LoadingPlaceholder;
