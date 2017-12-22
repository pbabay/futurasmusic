import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { TrackComponent } from './track/track.component';
import { TrackService } from './track.service';
import { MockTrackService } from './mock-track.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { DelayDirective } from './delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    TrackService,
    MockTrackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
