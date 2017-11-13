import { AuthGuard } from './../shared/guards/auth.guard';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SettingsComponent, LoginComponent, SignupComponent],
  providers: [AuthGuard]
})
export class ProfileModule { }
