import '@angular/compiler';
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './app/app.component';
import './index.css';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection()
  ]
}).catch((err) => console.error(err));
