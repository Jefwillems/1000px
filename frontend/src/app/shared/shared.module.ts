import { ImageComponent } from './components/image/image.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ImageComponent,
        AdminComponent
    ],
    exports: [
        ImageComponent,
        AdminComponent
    ]
})

export class SharedModule { }
