import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
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
import { authInitRegister } from '../../redux';
import { ThemeColors, ThemeDefinitions, ThemeStyles } from '../../theme';
import { AuthRoutesParams } from '../../types/route.types';

interface Props extends NativeStackScreenProps<AuthRoutesParams, 'Login'> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const initForm = { name: '', lastName: '', phone: '', username: '', password: '' };
  const { values: form, onChange } = useForm(initForm);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!form.name) {
      ToastAndroid.show('El nombre es obligatorio', 3000);
      return;
    }
    if (!form.lastName) {
      ToastAndroid.show('El apellido es obligatorio', 3000);
      return;
    }
    if (!form.phone) {
      ToastAndroid.show('El teléfono es obligatorio', 3000);
      return;
    }
    if (!form.username) {
      ToastAndroid.show('El usuario es obligatorio', 3000);
      return;
    }
    if (!form.password) {
      ToastAndroid.show('La contraseña es obligatoria', 3000);
      return;
    }

    dispatch(authInitRegister(form));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="height">
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('../../assets/img/img-register.png')} />
        </View>

        <View style={styles.form}>
          <TextInput
            style={ThemeStyles.input}
            placeholder="Nombre"
            autoCorrect={false}
            onChangeText={(v) => onChange({ name: v })}
            value={form.name}
          />
          <TextInput
            style={ThemeStyles.input}
            placeholder="Apellido"
            autoCorrect={false}
            onChangeText={(v) => onChange({ lastName: v })}
            value={form.lastName}
          />
          <TextInput
            style={ThemeStyles.input}
            placeholder="Teléfono"
            autoCorrect={false}
            onChangeText={(v) => onChange({ phone: v })}
            value={form.phone}
          />
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
            <Text style={styles.formButtonCenter}>Registrase</Text>
            <View>
              <Image
                style={styles.formButtonRight}
                source={require('../../assets/icons/arrow-right.png')}
              />
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Login', {})}>
            <Text style={styles.formOptions}>Iniciar sesión</Text>
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
            <Text>Registrarse con Google</Text>
            <View style={styles.altLoginButtonRight} />
          </Pressable>

          <Pressable onPress={() => {}} style={[ThemeStyles.input, styles.altLoginButton]}>
            <View>
              <Image
                style={styles.altLoginButtonLeft}
                source={require('../../assets/icons/facebook.png')}
              />
            </View>
            <Text>Registrarse con Facebook</Text>
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
