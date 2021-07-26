import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({})
  }

  submit() {
    console.log('Form submitted', this.form);
    
  }
}
