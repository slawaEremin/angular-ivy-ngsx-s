import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppComponent } from './app.component';

import { TodoState } from './store/todo';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  imports:      [ 
    BrowserModule,
     FormsModule,
     CommonModule,
     NgxsModule.forRoot([TodoState], {
      developmentMode: true
    })
  ],
  declarations: [ AppComponent, TodoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
