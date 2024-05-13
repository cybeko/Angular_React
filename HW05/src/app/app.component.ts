import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentComponent } from './component/component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HW05';
}
