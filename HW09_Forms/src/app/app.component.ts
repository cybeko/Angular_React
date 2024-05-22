import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "HW09_Forms";
  myForm: FormGroup;
  hobbies: string[] = [];
  formSubmitted: boolean = false;
  
  constructor(private form: FormBuilder) {
    this.myForm = this.form.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8), ]],
      userCheckbox: [false, Validators.required],
      hobby: ['']
    });
  }
  
  onSubmit()
  {
    console.clear();
    console.log('Log');
    console.log(`Password - ${this.myForm.value.userPassword}`);
    console.log(`Email - ${this.myForm.value.userEmail}`);
    console.log(`Checkbox - ${this.myForm.value.userCheckbox}`);
    console.log('Hobbies array:', this.hobbies);
    this.formSubmitted = true;
  }

  addHobby() {
    const hobbyControl = this.myForm.get('hobby');
    if (hobbyControl && hobbyControl.value.trim() !== '') {
      this.hobbies.push(hobbyControl.value);
      hobbyControl.setValue('');
    }
  }
  
}