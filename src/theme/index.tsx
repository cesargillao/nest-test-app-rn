import { StyleSheet } from 'react-native';

export const ThemeColors = {
  background: '#FFFFFF',
  input: '#F2F2F2',
  red: '#DF0611',
  lightenRed: '#FFF5F5',
  grey: '#424242',
  blue: '#2281E0',
  text: '#424242',
};

export const ThemeDefinitions = {
  padding: 10,
  inputBorderRadius: 5,
  componentsSeparator: 20,
};

export const ThemeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: ThemeColors.background,
  },
  background: {
    backgroundColor: ThemeColors.background,
  },
  container: {
    flex: 1,
    backgroundColor: ThemeColors.background,
    paddingHorizontal: ThemeDefinitions.padding / 2,
  },
  input: {
    height: 40,
    backgroundColor: ThemeColors.input,
    paddingHorizontal: ThemeDefinitions.padding,
    paddingVertical: 5,
    marginBottom: ThemeDefinitions.componentsSeparator,
    borderRadius: ThemeDefinitions.inputBorderRadius,
    color: ThemeColors.grey,
    textAlign: 'left',
    textAlignVertical: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
