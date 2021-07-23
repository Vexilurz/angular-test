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

  updatePosts(post: IPost) {
    this.posts.unshift(post)    
  }

  removePost(id: number) {
    console.log('Id to remove', id);    
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
