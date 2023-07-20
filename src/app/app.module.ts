import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PfsComponent } from './Mycomponent/pfs/pfs.component';
import { PfsItemComponent } from './Mycomponent/pfs-item/pfs-item.component';
import { PfsAddComponent } from './Mycomponent/pfs-add/pfs-add.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Mycomponent/about/about.component';
import { HomeComponent } from './Mycomponent/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PfsComponent,
    PfsItemComponent,
    PfsAddComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
