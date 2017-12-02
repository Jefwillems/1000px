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


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
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
  providers: [StorageManagerService, BlogService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
