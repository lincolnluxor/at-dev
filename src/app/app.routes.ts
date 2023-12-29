import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { ShoesComponent } from './shoes/shoes.component';
import { RunigamiComponent } from './runigami/runigami.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'shoes',
    component: ShoesComponent,
  },
  {
    path: 'runigami',
    component: RunigamiComponent,
  }
];
