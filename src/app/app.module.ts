import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { EmailComponent } from './email/email.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';

const firebaseConfig = {
  apiKey: "AIzaSyA6DA85fuKAQctTy3jtFKoLvt_aQVVOLD8",
  authDomain: "codnect-ang4.firebaseapp.com",
  databaseURL: "https://codnect-ang4.firebaseio.com",
  projectId: "codnect-ang4",
  storageBucket: "codnect-ang4.appspot.com",
  messagingSenderId: "25303930194"
};




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    EmailComponent,
    ArticlesComponent,
    ArticleComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  providers: [ AuthService, AuthGuard, AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
