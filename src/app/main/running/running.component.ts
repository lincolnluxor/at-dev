import { Component, HostBinding } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-running',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './running.component.html',
  styleUrl: './running.component.scss'
})
export class RunningComponent {
  @HostBinding('class.container') container = true;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
    ) {}
  navigateTo(path: string) {
    this.route.navigate([path], { relativeTo: this.activatedRoute });
  }
}
