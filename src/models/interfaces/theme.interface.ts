export interface IColors {
  primaryColor: string
  secondaryColor: string
  accentColor: string

  textPrimaryColor: string
  textSecondaryColor: string
  textSuccessColor: string
  textErrorColor: string
  textWarningColor: string

  textButtonColor: string
  backgroundScaffoldColor: string
  backgroundButtonColor: string

  iconColor: string
  borderColor: string
  shadowColor: string

  successColor: string

  warningColor: string
  errorColor: string
}

export interface IFonts {
  fontFamily: string
}

export interface ISpacing {

}

export interface ITheme extends IFonts, IColors, ISpacing {}
