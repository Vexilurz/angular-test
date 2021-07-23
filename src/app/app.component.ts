import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  arr = [1, 1, 2, 3, 5, 8, 13]

  objects = [
    {title: 'post1', author: 'vex', comments: [
      {name: 'max', text: 'lorem 1'},
      {name: 'max', text: 'lorem 2'},
      {name: 'max', text: 'lorem 3'},
    ]},
    {title: 'post2', author: 'vex2', comments: [
      {name: 'max2', text: 'lorem 1'},
      {name: 'max2', text: 'lorem 2'},
      {name: 'max2', text: 'lorem 3'},
    ]},
  ]

}
