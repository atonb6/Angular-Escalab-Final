
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtComponent } from './components/art/art.component';
import { ArtListComponent } from './components/art-list/art-list.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'art-list', component: ArtListComponent,
        children: [
          { path: 'artSingle/:id', component: ArtComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule { }
