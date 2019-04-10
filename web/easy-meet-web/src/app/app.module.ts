import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeetingComponent } from './meeting/meeting.component';
import { SummerizeComponent } from './summerize/summerize.component';
import { SummeryComponent } from './summery/summery.component';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { FormsModule } from '@angular/forms'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MeetingComponent,
    SummerizeComponent,
    SummeryComponent,
    MeetingDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
