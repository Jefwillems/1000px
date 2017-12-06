import { Http, HttpModule } from '@angular/http';

import { ProfileModule } from './profile/profile.module';
import { DiscoverModule } from './discover/discover.module';
import { BlogModule } from './blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

import { NavigationComponent } from './navigation/navigation.component';

import { BlogService } from './shared/services/blog.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageManagerService } from './shared/services/storage-manager.service';
import { AuthService } from './shared/services/auth.service';
import { UploadComponent } from './upload/upload.component';
import { UserService } from './shared/services/user.service';
import { PictureComponent } from './picture/picture.component';
import { PictureResolver } from './picture/picture-resolver.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminGuard } from './shared/guards/admin.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UploadComponent,
    PictureComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    HomeModule,
    BlogModule,
    DiscoverModule,
    ProfileModule,
    AppRoutingModule
  ],
  providers: [StorageManagerService, BlogService, AuthService, UserService, PictureResolver, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
