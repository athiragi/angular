import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Mycomponent/about/about.component';
import { PfsComponent } from './Mycomponent/pfs/pfs.component';
import { HomeComponent } from './Mycomponent/home/home.component';

const routes: Routes = [
  {path:'',component:PfsComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
