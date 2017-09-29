import { DiscoverRoutingModule } from './discover-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsComponent } from './editors/editors.component';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  declarations: [EditorsComponent]
})
export class DiscoverModule { }
