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
    <app-member [teamMember]="teamMemberIvan"></app-member>
    <app-member [teamMember]="teamMemberObabilia"></app-member>
    <app-member [teamMember]="teamMemberDania"></app-member>
    <app-member [teamMember]="teamMemberKsenia"></app-member>
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

  teamMemberObabilia: TeamMember = {
    name: 'Олександр Бабіля',
    position: 'Бекенд розробник',
    img: `${this.baseUrl}/oleksandr.jpg`
  };

  teamMemberDania: TeamMember = {
    name: 'Василенко Даня',
    position: 'Фронтенд розробник',
    img: `${this.baseUrl}/dania.jpg`
  };

  teamMemberIvan: TeamMember = {
    name: 'Жук Іван',
    position: 'Проджект менеджер',
    img: `${this.baseUrl}/ivan.jpg`
  };

  teamMemberKsenia: TeamMember = {
    name: 'Вагурак Ксенія',
    position: 'UI/UX дизайнер',
    img: `${this.baseUrl}/ksenia.jpg`
  };
}
