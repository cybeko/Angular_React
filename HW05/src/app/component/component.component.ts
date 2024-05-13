import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {

  descriptions = ["Volkswagen AG and Toyota are currently the world's leading passenger car manufacturers. Volkswagen AG is the world's biggest auto manufacturer with a revenue of $284.34 billion in 2022. The automaker, which ranked second position in 2021, replaced Toyota Motor Corporation which was previously number one on the list.", 
  "The Seawise Giant is the largest ship in the world by length, displacement and deadweight tonnage ever constructed. Built in 1979 at the Oppama shipyard in Japan, it was originally delivered as the Happy Giant oil tanker with a length of 458 meters.", 
  "With a cruise speed of 500mph, and a range that enables it to fly for 18 hours without refuelling, the AN-225’s outstanding freight capabilities are still second to none. Measured from nose to tail and wingtip to wingtip, the AN-225 is almost the size of a football field. It’s six ZMKB Progress Lotarev D-18T turbofan jet engines give sufficient thrust to enable Mriya (Russian for ‘dream’) a max takeoff weight (MTOW) of 700 tons. The thrust required to get a plane this size off the ground is huge – in the AN-225’s case a jaw-dropping 51,590 pounds."];
  buttonId = 0;

}
