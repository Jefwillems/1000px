import { AuthGuard } from './../shared/guards/auth.guard';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [SettingsComponent],
  providers: [AuthGuard]
})
export class ProfileModule { }
