/*
    theme colors generated by https://callstack.github.io/react-native-paper/docs/guides/theming
    withs colors :
        export enum Color {
            PRIMARY = '#ED2272',
            SECONDARY = '#2F215F',
            TERTIARY =  '#7B5733',
            SUCCESS = '#23C766',
            ERROR = '#EF4B56',
        }
*/

import {
  borderRadius,
  spacers,
  tags,
} from "#modules/core/style/themes/beans/theme.utils";

export const lightPaperTheme = {
  colors: {
    primary: "rgb(187, 0, 85)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(255, 217, 223)",
    onPrimaryContainer: "rgb(63, 0, 24)",
    secondary: "rgb(99, 81, 165)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(231, 222, 255)",
    onSecondaryContainer: "rgb(30, 0, 95)",
    tertiary: "rgb(123, 87, 51)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 220, 189)",
    onTertiaryContainer: "rgb(44, 22, 0)",
    error: "rgb(182, 32, 50)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 217)",
    onErrorContainer: "rgb(65, 0, 8)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(32, 26, 27)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(32, 26, 27)",
    surfaceVariant: "rgb(243, 221, 224)",
    onSurfaceVariant: "rgb(82, 67, 70)",
    outline: "rgb(132, 115, 118)",
    outlineVariant: "rgb(214, 194, 196)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(53, 47, 48)",
    inverseOnSurface: "rgb(250, 238, 239)",
    inversePrimary: "rgb(255, 177, 194)",
    surfaceDisabled: "rgba(32, 26, 27, 0.12)",
    onSurfaceDisabled: "rgba(32, 26, 27, 0.38)",
    backdrop: "rgba(58, 45, 47, 0.4)",
    success: "rgb(0, 109, 51)",
    onSuccess: "rgb(255, 255, 255)",
    successContainer: "rgb(106, 254, 150)",
    onSuccessContainer: "rgb(0, 33, 11)",
  },
  elevation: {
    level0: "transparent",
    level1: "rgb(252, 238, 247)",
    level2: "rgb(250, 231, 241)",
    level3: "rgb(248, 223, 236)",
    level4: "rgb(247, 221, 235)",
    level5: "rgb(246, 216, 231)",
  },
  spacers,
  borderRadius,
  get tags() {
    return tags(this);
  },
};
