import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { BlogResolver } from './blog-detail/blog-resolver.service';

const appRoutes: Routes = [
    {
        path: 'blog', children: [
            { path: '', component: BlogComponent, pathMatch: 'full' },
            { path: 'add', component: BlogAddComponent, canActivate: [AuthGuard] },
            { path: ':id', component: BlogDetailComponent, resolve: { blogpost: BlogResolver } }
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
