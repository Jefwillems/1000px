import { FreshComponent } from './fresh/fresh.component';
import { PopularComponent } from './popular/popular.component';
import { EditorsComponent } from './editors/editors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
    {
        path: 'discover', children: [
            { path: '', redirectTo: 'editors', pathMatch: 'full' },
            { path: 'editors', component: EditorsComponent },
            { path: 'popular', component: PopularComponent },
            { path: 'fresh', component: FreshComponent },
        ]
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
export class DiscoverRoutingModule { }
