import { Component, HostListener, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NgIconComponent, provideIcons  } from '@ng-icons/core';
import { bootstrapChevronDown } from '@ng-icons/bootstrap-icons';
import { MainService } from './main.service';
import { SettingsService } from '../settings.service';
import { CommonModule } from '@angular/common';
import { WhoamiComponent } from './whoami/whoami.component';
import { HistoryComponent } from './history/history.component';
import { OtherComponent } from './other/other.component';
import { RunningComponent } from './running/running.component';
import { ThanksComponent } from './thanks/thanks.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavigationComponent, ThanksComponent, RunningComponent, OtherComponent, HistoryComponent, WhoamiComponent, HeroComponent, NgIconComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [
    provideIcons({ bootstrapChevronDown })
  ]
})
export class MainComponent implements OnInit {
  currentState = '';
  states: Object | undefined;
  sticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (verticalOffset > window.innerHeight) {
      this.sticky = true;
    } else {
      // Otherwise, set the sticky variable to false
      this.sticky = false;
    }
  }

  constructor(
    private settingsService: SettingsService
    ) {}

  ngOnInit(): void {
  }
}
