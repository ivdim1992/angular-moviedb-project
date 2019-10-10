import { APP_CONFIG } from './injection-token';
import { IAppConfig } from './app.config';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor(@Inject(APP_CONFIG) private _config: IAppConfig) {}

  get config(): IAppConfig {
    return this._config;
  }
}
