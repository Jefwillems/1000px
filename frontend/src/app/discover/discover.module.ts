import { DiscoverRoutingModule } from './discover-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsComponent } from './editors/editors.component';
import { PopularComponent } from './popular/popular.component';
import { FreshComponent } from './fresh/fresh.component';
import { DiscoverNavComponent } from './discover-nav/discover-nav.component';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  declarations: [EditorsComponent, PopularComponent, FreshComponent, DiscoverNavComponent]
})
export class DiscoverModule { }
