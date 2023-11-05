import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const SuccessScreen = ({ route }) => {
  const { message } = route.params;

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

SuccessScreen.propTypes = {
  route: PropTypes.object.isRequired,
};

export default SuccessScreen;
