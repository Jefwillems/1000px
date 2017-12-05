import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PictureComponent } from './picture/picture.component';
import { PictureResolver } from './picture/picture-resolver.service';

const appRoutes: Routes = [
    { path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
    {
        path: 'p', children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: ':id', component: PictureComponent, resolve: { picture: PictureResolver } }
        ]
    },
    //   { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
