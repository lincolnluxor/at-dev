import { Component, HostBinding } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class ThanksComponent {
  @HostBinding('class.container') container = true;

}
