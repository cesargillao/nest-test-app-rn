import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { authInitLogin } from '../../redux';
import { ThemeColors, ThemeDefinitions, ThemeStyles } from '../../theme';
import { AuthRoutesParams } from '../../types/route.types';

interface Props extends NativeStackScreenProps<AuthRoutesParams, 'Login'> {}

export const LoginScreen = ({ navigation }: Props) => {
  const initForm = { username: '', password: '' };
  const { values: form, onChange } = useForm(initForm);
  const dispatch = useDispatch();

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!form.username) {
      ToastAndroid.show('El usuario es requerido', 3000);
      return;
    }
    if (!form.password) {
      ToastAndroid.show('La contraseña es requerida', 3000);
      return;
    }

    // Enviar el formulario mediante un dispatch
    dispatch(authInitLogin(form.username, form.password));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="height">
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('../../assets/img/img-login.png')} />
        </View>

        <View style={styles.form}>
          <TextInput
            style={ThemeStyles.input}
            placeholder="Usuario"
            autoCorrect={false}
            onChangeText={(v) => onChange({ username: v })}
            value={form.username}
          />
          <TextInput
            style={ThemeStyles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(v) => onChange({ password: v })}
            value={form.password}
          />
          <Pressable style={[ThemeStyles.input, styles.formButton]} onPress={() => onSubmit()}>
            <View style={styles.formButtonLeft} />
            <Text style={styles.formButtonCenter}>Iniciar sesión</Text>
            <View>
              <Image
                style={styles.formButtonRight}
                source={require('../../assets/icons/arrow-right.png')}
              />
            </View>
          </Pressable>

          <Pressable onPress={() => {}}>
            <Text style={styles.formOptions}>¿Recuperar contraseña?</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Register', {})}>
            <Text style={styles.formOptions}>Registrarse</Text>
          </Pressable>
        </View>

        <View style={styles.separator}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>o</Text>
          <View style={styles.separatorLine} />
        </View>

        <View style={styles.altLogin}>
          <Pressable onPress={() => {}} style={[ThemeStyles.input, styles.altLoginButton]}>
            <View>
              <Image
                style={styles.altLoginButtonLeft}
                source={require('../../assets/icons/gmail.png')}
              />
            </View>
            <Text>Iniciar sesión con Google</Text>
            <View style={styles.altLoginButtonRight} />
          </Pressable>

          <Pressable onPress={() => {}} style={[ThemeStyles.input, styles.altLoginButton]}>
            <View>
              <Image
                style={styles.altLoginButtonLeft}
                source={require('../../assets/icons/facebook.png')}
              />
            </View>
            <Text>Iniciar sesión con Facebook</Text>
            <View style={styles.altLoginButtonRight} />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: ThemeColors.red,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: 'hidden',
    paddingTop: 20,
  },
  img: {
    height: 250,
    resizeMode: 'contain',
    right: 30,
  },
  form: {
    paddingTop: 30,
    paddingHorizontal: 50,
  },
  formButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: ThemeColors.red,
  },
  formButtonLeft: {
    height: 10,
    width: 34,
  },
  formButtonCenter: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
  },
  formButtonRight: {
    flex: 1,
    width: 34,
  },
  formOptions: {
    textAlign: 'center',
    color: ThemeColors.blue,
    paddingBottom: ThemeDefinitions.componentsSeparator,
  },
  separator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: ThemeDefinitions.componentsSeparator,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: ThemeColors.grey,
    marginHorizontal: 20,
  },
  separatorText: {
    width: 50,
    textAlign: 'center',
    fontSize: 18,
  },
  altLogin: {
    flexDirection: 'column',
    paddingHorizontal: 50,
  },
  altLoginButton: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  altLoginButtonLeft: {
    flex: 1,
    width: 24,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    marginLeft: 10,
  },
  altLoginButtonCenter: {
    flex: 1,
  },
  altLoginButtonRight: {
    height: 1,
    width: 24,
  },
});
