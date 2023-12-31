type LanguageTranslationType = {
  common: {
    matches: string;
    profile: string;
    over: string;
    description: string;
    next: string;
    toImplement: string;
    fullName: string;
    dateOfBirth: string;
    gender: string;
    cancel: string;
    stepperHeader: string;
  };
  component: {};
  screen: {
    SignInScreen: {
      title: string;
      spotifySignInButtonLabel: string;
    };
    SignInSuccessfulScreen: {
      title: string;
      subtitle: string;
    };
    WelcomeScreen: {
      title: string;
      subtitle: string;
      submitButton: string;
    };
    SongPicker: {
      searchBarPlaceholder: string
    }
  };
};

export default LanguageTranslationType;
