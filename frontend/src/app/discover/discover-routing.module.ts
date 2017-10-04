import { FreshComponent } from './fresh/fresh.component';
import { PopularComponent } from './popular/popular.component';
import { EditorsComponent } from './editors/editors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
    { path: 'discover/editors', component: EditorsComponent },
    { path: 'discover/popular', component: PopularComponent },
    { path: 'discover/fresh', component: FreshComponent },
    { path: 'discover', redirectTo: '/discover/editors' }
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
