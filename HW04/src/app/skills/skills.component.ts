import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  Languages = ["Bulgarian", "English", "Polish", "German"];
  Skills = ["Backend Technologies: Node.js, Express.js, Django, Flask", 
  "Deployment/DevOps: Docker, Heroku, AWS, Netlify, CI/CD pipelines", 
  "Web Performance Optimization: Lazy loading, code splitting, image optimization, caching strategies", 
  "Web Accessibility: WCAG guidelines, screen reader compatibility, semantic HTML"];
}
