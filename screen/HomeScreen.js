import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
//import { Icon, Right } from 'native-base';

const Stack = createStackNavigator();

function Home() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: '최근 재생한 항목',
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Icon key={0} name="inbox" color={colors.text} size={30} style={{ paddingRight:15 }}/>
              <Icon key={1} name="settings" color={colors.text} size={30} style={{ paddingRight:15 }}/>
            </View>
          ),
        }} />
    </Stack.Navigator>
  );
}

function HomeScreen( { navigation }) {
    return (
      <View style={{ 
        flex: 1, justifyContent: 'center' 
        }}>
        <Text>
          test
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    position: 'absolute',
    width: 30,
    height: 35,
    padding: 10,
    margin: 20,
  },
});

export default Home;