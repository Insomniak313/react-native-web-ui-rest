import React from 'react';
import { ActivityIndicator, Platform, View, Text } from 'react-native';
import { Colors } from '../constants';

import VictoryChart from '../components/VictoryChart';
import Button from '../components/Button';
import Switch from '../components/Switch';

const Home = ({ children }) => (
  <View>
    <Text>Les boutons :</Text>

    <Button onClick={() => {}}  label="Primary button" color="primary" variant="contained"  />
    <Button onClick={() => {}}  label="Primary rounded button" color="primary" variant="contained" rounded />
    <Button onClick={() => {}}  label="Secondary button" color="secondary" variant="contained"  />
    <Button onClick={() => {}}  label="Secondary rounded button" color="secondary" variant="contained" rounded />
    <Button onClick={() => {}}  label="Custom color button" color="#16ab08" variant="contained"  />
    <Button onClick={() => {}}  label="Custom color rounded button" color="#16ab08" variant="contained" rounded />
    
    <Text>Les Switch :</Text>

    <Switch color="primary" />
    <Switch color="secondary" />
    <Switch color="#16ab08" />

    <Text>Les graphiques :</Text>
    <VictoryChart />
    { children }
  </View>
);

export default Home;
