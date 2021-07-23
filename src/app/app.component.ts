import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Dynamic title'
  number = 42
  arr = [1,2,3]
  obj = {
    a: 1,
    b: {
      c: 2
    }
  }

  inputValue = ''

  // img = 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'

  constructor() {
    // setTimeout(()=>{
    //   console.log('timeout is over')
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
    // }, 5000)
  }
  
  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string) {
    this.inputValue = str+str
  }

  onClick() {
    console.log('click');    
  }
}
