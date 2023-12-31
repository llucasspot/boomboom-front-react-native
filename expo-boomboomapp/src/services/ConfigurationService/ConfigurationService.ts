import {singleton} from 'tsyringe';

@singleton()
export default class ConfigurationService {

  static isAppInMockMode(): boolean {
    return process.env.EXPO_PUBLIC_MOCK_MODE === 'true';
  }

  getApiUrl(): string {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error(
        'add API_URL in .env file. example: API_URL=http://192.168.1.186:4000/api',
      );
    }
    return apiUrl;
  }

  isAppInDebugMode(): boolean {
    return process.env.NODE_ENV === 'development';
  }

  isAppInMockMode(): boolean {
    return ConfigurationService.isAppInMockMode();
  }

  byPassSignInScreen() {
    return process.env.EXPO_PUBLIC_BY_PASS_SIGN_IN_SCREEN === 'true';
  }
}
