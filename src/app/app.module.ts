import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ShareButtonsModule} from 'ngx-sharebuttons';
 import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RootComponent } from './root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: AppComponent},
    {path: ':id', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgbModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
