import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtComponent } from './components/art/art.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoggedGuard } from './guards/logged.guard';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'obras', component:ArtComponent, canActivate: [LoggedGuard]},
  {path:'obra/:id', component:ArtComponent},
  {path:'contacto', component:ContactComponent},
  {path:'login',component:AuthentificationComponent},
  {path:'register',component:RegisterComponent},
  {path:'**', component:NopageComponent, pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
