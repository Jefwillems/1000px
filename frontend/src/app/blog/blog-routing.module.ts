import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const appRoutes: Routes = [
    {
        path: 'blog', children: [
            { path: '', component: BlogComponent },
            { path: 'detail', component: BlogDetailComponent }
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
export class BlogRoutingModule { }
