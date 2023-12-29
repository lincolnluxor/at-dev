import { Injectable } from '@angular/core';
import { RunsDef, ShoesDef, StateDef, StatesDef } from './interfaceGlossary.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  isLoading: boolean = true;
  title = 'adamtatedev';
  settings = {
    title: 'adamtatedev'
  }
  states: StatesDef[] | undefined;

  getStates() {
    const endpoint = `assets/stateSvgDefinitions.json`;
    return this.http.get<StatesDef>(endpoint);
  }

  getShoes() {
    const endpoint = `assets/shoes.json`;
    return this.http.get<ShoesDef>(endpoint);
  }

  getRuns() {
    const endpoint = `assets/runs.json`;
    return this.http.get<RunsDef>(endpoint);
  }
}
