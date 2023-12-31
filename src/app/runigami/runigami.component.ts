import { Component } from '@angular/core';
import { SettingsService } from '../settings.service';
import { RunDef, RunsDef } from '../interfaceGlossary.model';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-runigami',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatProgressSpinnerModule, NavigationComponent],
  templateUrl: './runigami.component.html',
  styleUrl: './runigami.component.scss'
})
export class RunigamiComponent {
  runs: RunsDef = {
    "runs": []
  };
  isLoading: boolean = true;
  numbers: number[];
  runsEndingIn: number[] = [];
  selectedYear: number = 2023;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private settingsService: SettingsService) {
    this.numbers = Array(60).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
    this.setRuns();
  }

  setRuns() {
    this.settingsService.getRuns().subscribe({
      next: (data: RunsDef) => {
        this.runs = data;
        this.isLoading = false;
        this.updateRuns();
      },
      error: (error: any) => console.error('Got an error: ', error)
    });
  }

  updateRuns() {
    this.runs.runs.forEach(run => {
      const runYear = new Date(run.date).getFullYear();
      if (runYear === this.selectedYear) {
        this.runsEndingIn.push(run.seconds);
      }
    });
  }

  checkRun(key: number) {
    return (this.runsEndingIn.indexOf(key) !== -1)
  }

  selectYear(year: number) {
    this.selectedYear = year;
    this.runsEndingIn.length = 0;
    this.updateRuns();
  }

}
