import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SourcesComponent } from './sources/sources.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { SourceheadlineComponent } from './sourceheadline/sourceheadline.component';
import {SourceService} from './source.service';
import { HomeComponent } from './home/home.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent},
  { path: 'headlines', component: TopheadlinesComponent},
  { path: 'sources', component: SourcesComponent},
  { path: 'sourcenews', component: SourceheadlineComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SourcesComponent,
    TopheadlinesComponent,
    SourceheadlineComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
