import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemeColors, ThemeDefinitions } from '../theme';
import { AppRoutesParams } from '../types/route.types';

interface Props extends DrawerScreenProps<AppRoutesParams, 'Home'> {}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('../assets/img/bg-dashboard.png')} />
      <View style={styles.header}>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image style={styles.menu} source={require('../assets/icons/menu.png')} />
        </Pressable>
        <View style={styles.photo} />
      </View>

      <View style={styles.itemCenter}>
        <View style={styles.items}>
          <View style={styles.box}>
            <View style={styles.item}>
              <Image style={styles.icon} source={require('../assets/icons/consulta.png')} />
            </View>
            <Text style={styles.itemText}>Consulta Presencial</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.item}>
              <Image style={styles.icon} source={require('../assets/icons/qr.png')} />
            </View>
            <Text style={styles.itemText}>Código QR</Text>
          </View>
        </View>

        <View style={styles.items}>
          <View style={styles.box}>
            <View style={styles.item}>
              <Image style={styles.icon} source={require('../assets/icons/historial.png')} />
            </View>
            <Text style={styles.itemText}>Historial Médico</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.item}>
              <Image style={styles.icon} source={require('../assets/icons/fidelizacion.png')} />
            </View>
            <Text style={styles.itemText}>Fidelización</Text>
          </View>
        </View>

        <View style={styles.items}>
          <View style={styles.box}>
            <View style={styles.item}>
              <Image style={styles.icon} source={require('../assets/icons/chat.png')} />
            </View>
            <Text style={styles.itemText}>Chat</Text>
          </View>

          <View style={styles.box}>
            <View style={[styles.item, styles.nonItem]}>
              <View style={styles.icon} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.red,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: undefined,
    aspectRatio: 5 / 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  menu: {
    width: 44,
    height: 44,
  },
  photo: {
    width: 36,
    height: 36,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  itemCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: ThemeDefinitions.componentsSeparator * 2,
  },
  box: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
    elevation: 5,
    alignSelf: 'center',
  },
  icon: {
    width: 48,
    height: 48,
  },
  itemText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 12,
  },
  nonItem: {
    flex: 1,
    backgroundColor: 'transparent',
    elevation: 0,
  },
});
