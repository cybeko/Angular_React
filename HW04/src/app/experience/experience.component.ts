import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  Position= "Senior Web Developer, XYZ Tech Inc.";
  Location= "USA, New York";
  Duration = "12.05.2016 - 22.08.2022"
  Duties = ["Spearheaded the development of several key projects, including the redesign of the company's e-commerce platform and the implementation of a real-time chat feature for customer support.",
    "Utilized a variety of technologies such as HTML5, CSS3, JavaScript, and React.js to create dynamic and responsive web applications.",
    "Collaborated closely with cross-functional teams including designers, product managers, and quality assurance to deliver high-quality software solutions on time and within budget.",
    "Led code reviews and provided mentorship to junior developers, fostering a culture of continuous learning and improvement."
  ]

}
