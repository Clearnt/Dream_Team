import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { TeamMember } from './teammember';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MemberComponent],
  styleUrl: './app.component.css',
  template: `
  <section id="title">
    Our dream team
  </section>
  <section class="members">
    <app-member [teamMember]="teamMember"></app-member>
    <app-member [obabilia]="obabilia"></app-member>
    <app-member [teamMember]="teamMember"></app-member>
    <app-member [teamMember]="teamMember"></app-member>
  </section>
  `
})
export class AppComponent {
  title = 'dream_team';
  readonly baseUrl = '../assets/images';

  teamMember: TeamMember = {
    name: 'Test name',
    position: 'Test position',
    img: `${this.baseUrl}/test.jpg`
  };

  obabilia: TeamMember = {
    name: 'Oleksandr Babilli',
    position: 'Junior',
    img: `${this.baseUrl}/obabilia.png`
  };
}
