import { Component, HostBinding } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  @HostBinding('class.container') container = true;
}
