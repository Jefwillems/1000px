import { ImageComponent } from './components/image/image.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ImageComponent
    ],
    exports: [
        ImageComponent
    ]
})

export class SharedModule { }
