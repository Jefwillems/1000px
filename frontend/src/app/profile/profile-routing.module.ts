import { AuthGuard } from './../shared/guards/auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { ProfileResolver } from './profile/profile-resolver.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'profile', children: [
            { path: '', component: ProfileComponent, resolve: { profile: ProfileResolver } },
            { path: ':id', component: ProfileComponent, resolve: { profile: ProfileResolver } },
            { path: 'edit', component: EditComponent }
        ], canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule { }
