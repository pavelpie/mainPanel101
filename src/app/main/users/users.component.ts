import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
 usersList = [
    {name: 'John', age: 25, email: 'gfgdsgds@gsdg'},
    {name: 'Bon', age: 30, email: 'rodi@gsdg'},
    {name: 'Krom', age: 30, email: 'wiwi@gsdg'}
 ]


}
