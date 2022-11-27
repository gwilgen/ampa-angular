import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// Root component
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// template driven forms
import { FormsModule } from '@angular/forms';

// translation dependencies
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// our components
import { HomeComponent, ContactComponent, FAQComponent, OMRComponent, SchoolComponent } from './components/pages';
import { ProfileComponent, BirthdayComponent, LunchComponent, LottoComponent, FamilyGatherComponent, SuggestionsComponent } from './components/user';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,
    './assets/i18n/',
    '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FAQComponent,
    OMRComponent,
    SchoolComponent,
    ProfileComponent,
    BirthdayComponent,
    LunchComponent,
    LottoComponent,
    FamilyGatherComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: ''       , component: HomeComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'faq'    , component: FAQComponent},
      {path: 'omr'    , component: OMRComponent},
      {path: 'school' , component: SchoolComponent},
      {path: 'user'   , children: [
        {path: 'profile',       component: ProfileComponent},
        {path: 'suggestions',   component: SuggestionsComponent},
        {path: 'birthday',      component: BirthdayComponent},
        {path: 'lunch',         component: LunchComponent},
        {path: 'lotto',         component: LottoComponent},
        {path: 'family-gather', component: FamilyGatherComponent},
        {path: '**',            redirectTo: 'profile'}
      ]}
    ]),
    CommonModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
