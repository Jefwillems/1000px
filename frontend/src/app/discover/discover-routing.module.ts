import { EditorsComponent } from './editors/editors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
    { path: 'editors', component: EditorsComponent },
    { path: 'discover', redirectTo: '/editors' }
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
export class DiscoverRoutingModule { }
