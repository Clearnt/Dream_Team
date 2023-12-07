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
    <app-member [teamMember]="teamMember"></app-member>
    <app-member [teamMember]="teamMemberania"></app-member>
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

  teamMemberania: TeamMember = {
    name: 'Василенко Даня',
    position: 'Фронтенд розробник',
    img: `${this.baseUrl}/dania.jpg`
  };
}
