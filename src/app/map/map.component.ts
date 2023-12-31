import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SettingsService } from '../settings.service';
import { StateDef, StatesDef } from '../interfaceGlossary.model';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MatCardModule, CommonModule, NavigationComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  currentState = '';
  states: StatesDef = {
    states: []
  };
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.setStates();
  }

  setStates() {
    this.settingsService.getStates().subscribe({
      next: (data: StatesDef) => {
        this.states = data;
        // console.log(this.states);
      },
      error: (error: any) => console.error('Got an error: ', error)
    });
  }

  selectedState(e: any) {
    const selectedStateAbbr = e.srcElement.id.replace('svg-', '');
    // console.log(selectedStateAbbr);
    if (this.currentState === selectedStateAbbr) {
      this.currentState = '';
    } else {
      this.currentState = selectedStateAbbr;
    }
  }

  selectedCard(e: any) {
    const selectedStateAbbr = e.srcElement.id.replace('card-', '');
    // console.log(selectedStateAbbr);
    if (this.currentState === selectedStateAbbr) {
      this.currentState = '';
    } else {
      this.currentState = selectedStateAbbr;
    }
  }
}
