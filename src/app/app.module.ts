import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { ImagesUserPage } from '../pages/images_user/images_user';
import {ConnectionOauth} from "../pages/Connection/connection";
import { login_inPage } from "../pages/login_in/login_in";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { upload_inPage } from "../pages/upload/upload";
import { HttpModule } from "@angular/http";
import { UploadService } from '../pages/upload/upload.service';
import { SearchService} from '../pages/search/search.service';
import { ImagesUserService} from '../pages/images_user/images_user.service';
import { FavoritesService } from  '../pages/Favorites/Favorites.service'
import {favoritesPage} from "../pages/Favorites/Favorites";
import {ConnectionService} from "../pages/Connection/connection.service";
import { getrefreshtoken } from "../pages/Connection/getRefreshToken";
import { DataClient } from '../pages/Connection/dataClient';
import {HomeService} from '../pages/home/home.service'
import {AddFavoriteService} from "../pages/Favorites/AddFavorite.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    ImagesUserPage,
    login_inPage,
    upload_inPage,
    favoritesPage,
    ConnectionOauth,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    ImagesUserPage,
    login_inPage,
    upload_inPage,
    favoritesPage,
    ConnectionOauth,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UploadService,
    HomeService,
    SearchService,
    ImagesUserService,
    FavoritesService,
    ConnectionService,
    getrefreshtoken,
    ConnectionOauth,
    DataClient,
    AddFavoriteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
