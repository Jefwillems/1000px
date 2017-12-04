import { AuthGuard } from './../shared/guards/auth.guard';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SettingsComponent, LoginComponent, SignupComponent, ProfileComponent, EditComponent],
  providers: [AuthGuard]
})
export class ProfileModule { }
