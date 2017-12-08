import { StorageManagerService } from './../shared/services/storage-manager.service';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { TipComponent } from './page/tip/tip.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
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
