import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from 'libs/shared/data-access/auth/src/lib/+state/auth.reducer';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
      HttpClientModule,
      BrowserAnimationsModule,
      StoreModule.forRoot({ auth: authReducer }),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([])
    ),
  ],
};
