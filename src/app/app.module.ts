import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoDetailsComponent } from './components/to-do-details/to-do-details.component';

const appRoutes: Routes = [
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'to-do-details/:id',      component: ToDoDetailsComponent },
  { path: '',
    redirectTo: '/to-do-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ToDoListComponent, ToDoDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
