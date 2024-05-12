import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  Name = "Jonathan";
  Surname = "Doe";
  Email = "ispy@gmail.com";
  PhoneNumber = "0960072328";
  Country = "England";
  City = "London";
  ImgPath = "https://cdn-icons-png.freepik.com/512/74/74472.png";
}
