import { Component, HostBinding } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './other.component.html',
  styleUrl: './other.component.scss'
})
export class OtherComponent {
  @HostBinding('class.container') container = true;

}
