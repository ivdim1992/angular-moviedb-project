export interface IAppConfig {
  production: boolean;
  BASE_URL: string;
  APP_KEY: string;
}

export const appConfig: IAppConfig = {
  production: false,
  BASE_URL: 'https://api.themoviedb.org/3/',
  APP_KEY: 'd6dcfd8148979550d8765390572dde53'
};
