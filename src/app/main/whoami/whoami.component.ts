import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-whoami',
  standalone: true,
  imports: [],
  templateUrl: './whoami.component.html',
  styleUrl: './whoami.component.scss'
})
export class WhoamiComponent {
  @HostBinding('class.container') container = true;

}
