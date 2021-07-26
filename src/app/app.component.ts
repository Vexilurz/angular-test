import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email, Validators.required, MyValidators.restrictedEmails
      ]),
      password: new FormControl(null, [
        Validators.required, Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submitted', this.form);
      const formData = {...this.form.value}
      console.log('Form data', formData);
    }
  }

  setCapital() {
    interface ICityMap {
      ru: string
      ua: string
      by: string
    }
    const cityMap: ICityMap = {
      ru: 'Moscow',
      ua: 'Kiev',
      by: 'Minsk'
    }
    const cityKey: keyof ICityMap = this.form.get('address')?.get('country')?.value
    const city = cityMap[cityKey];
    this.form.patchValue({
      address: {city}
    })    
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push()
    (this.form.get('skills') as FormArray).push(control)
  }

  getSkillsControls() {
    return (this.form.get('skills') as FormArray).controls;
  }
}
