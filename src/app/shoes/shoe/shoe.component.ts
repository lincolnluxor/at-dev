import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ShoesBrand } from '../../interfaceGlossary.model';

@Component({
  selector: 'app-shoe',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './shoe.component.html',
  styleUrl: './shoe.component.scss'
})
export class ShoeComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() miles: number = 0;
  @Input() cost: number = 0;
  @Input() brand: ShoesBrand | undefined;
  @Input() color1: string = '#000';
  @Input() color2: string = '#fff';
}
