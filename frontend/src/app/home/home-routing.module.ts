import { PageComponent } from './page/page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    { path: '', component: PageComponent }
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
export class HomeRoutingModule { }
