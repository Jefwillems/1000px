import { StorageManagerService } from './../shared/services/storage-manager.service';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { TipComponent } from './page/tip/tip.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    PageComponent,
    TipComponent
  ],
  providers: [
    StorageManagerService
  ]
})
export class HomeModule { }
