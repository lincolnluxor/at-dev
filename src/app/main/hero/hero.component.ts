import { Component } from '@angular/core';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  title: string = "adamtate.dev";
  constructor() {

  }

}
