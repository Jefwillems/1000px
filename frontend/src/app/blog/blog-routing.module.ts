import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecentComponent } from './recent/recent.component';


const appRoutes: Routes = [
    { path: 'blog', component: RecentComponent }
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
export class BlogRoutingModule { }
