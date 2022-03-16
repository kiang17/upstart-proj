import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { AddACardButtonComponent } from './add-a-card-button/add-a-card-button.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanColumnComponent,
    KanbanCardComponent,
    AddACardButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
