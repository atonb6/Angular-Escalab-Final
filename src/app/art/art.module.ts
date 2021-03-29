import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtListComponent } from './components/art-list/art-list.component';
import { ArtComponent } from './components/art/art.component';


@NgModule({
  declarations: [
    ArtListComponent, 
    ArtComponent
  ],
  imports: [
    CommonModule,
    ArtRoutingModule
  ]
})
export class ArtModule { }
