import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './app/login/login.component';

bootstrapApplication(LoginComponent, {
  providers: [importProvidersFrom(HttpClientModule, BrowserAnimationsModule)],
});
