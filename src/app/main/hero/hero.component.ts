import { Component } from '@angular/core';
import { SettingsService } from '../../settings.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  providers: [DatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  time: string | null = '';
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    let now = new Date();
    this.time = this.datePipe.transform(now, 'h:mm a', '-800', 'en-US');
    this.getTime();
  }

  getTime() {
    setInterval(() => {
      let now = new Date();
      this.time = this.datePipe.transform(now, 'h:mm a', '-800', 'en-US');
    }, 60000);
  }
}
