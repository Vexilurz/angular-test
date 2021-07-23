import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = ''
  searchField: keyof Post = 'title'
  
  posts: Post[] = [
    {title: 'Beer', text: 'Best beer ever'},
    {title: 'Bread', text: 'asd qr qw fsdfeqwf qqwd qwd  fd'},
    {title: 'JS', text: 'asfdgweewg rw  weff ewfd wef we'},
  ]
}
