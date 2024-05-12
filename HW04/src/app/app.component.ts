import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    PersonalInfoComponent, 
    ExperienceComponent, 
    SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HW04';
}
