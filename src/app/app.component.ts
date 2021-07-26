import { AnimationEvent } from '@angular/animations';
import { Component } from '@angular/core'
import { boxAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimation]
})
export class AppComponent {

  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

  animationStart(event: AnimationEvent) {
    console.log('started', event);
    
  }

  animationDone(event: AnimationEvent) {
    console.log('done', event);
    
  }

}

