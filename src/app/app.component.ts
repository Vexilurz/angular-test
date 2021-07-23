import { Component } from '@angular/core';

export interface IPost {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts: IPost[] = [
    {title: 'title 1', text: 'qwe qwe qwe qwe', id: 1},
    {title: 'title 2', text: 'dsfwrgwg ewf f ew qe', id: 2},
  ]

}
