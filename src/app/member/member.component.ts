import { Component, Input } from '@angular/core';
import { TeamMember } from '../teammember';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  template: `
    <section class="member-pad">
      <section class="member-pad-info">
        <section class="member-pad-name">{{ teamMember.name }}</section>
        <section class="member-pad-position">{{ teamMember.position }}</section>
      </section>
      <img class="member-pad-img" [src]="teamMember.img" alt="Exterior photo of {{teamMember.name}}">
    </section>
  `,
  styleUrl: './member.component.css'
})
@Input({

})
export class MemberComponent {
  @Input() teamMember!: TeamMember;
}
