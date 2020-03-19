import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { LoVideoComponent } from './lo-video/lo-video.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FilterlistPipe } from './filter.pipe';

const appRoutes: Routes = [
  {
    path: 'video-details/:ID',
    component: DetailsPageComponent
  },
  {
    path: 'Home',
    component: HomePageComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: '**', component: HomePageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LoVideoComponent,
    PaginationComponent, DetailsPageComponent, FilterlistPipe],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
