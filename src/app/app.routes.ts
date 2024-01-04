import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {UsersComponent} from "./main/users/users.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  {path: '', redirectTo: '/app/main', pathMatch: 'full'},
  {path: 'app', component: AppComponent, children: [
      {path: 'main', component: MainComponent, children: [
          { path: 'users', component: UsersComponent }
        ]
      }
    ]},
];
