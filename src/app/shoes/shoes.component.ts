import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ShoeComponent } from './shoe/shoe.component';
import { SettingsService } from '../settings.service';
import { ShoesDef } from '../interfaceGlossary.model';
import { CommonModule } from '@angular/common';
import { ShoesBrand } from '../interfaceGlossary.model';
import { NoShoeComponent } from './no-shoe/no-shoe.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinnerModule, MatChipsModule, ShoeComponent, NoShoeComponent, CommonModule],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesComponent {
  shoes: ShoesDef  = {
    shoes: []
  };
  isLoading: boolean = true;
  shoeBrands: ShoesBrand[] | undefined;
  filterBrands: ShoesBrand[] = [];
  removable = true;
  selectableBrandsCount = Object.keys(ShoesBrand).length;
  sortDirection: '↑' | '↓' = '↑';
  isSortingMiles = false;
  isSortingCost = false;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.setShoes();
    this.shoeBrands = Object.values(ShoesBrand);
    this.selectAll()
  }

  setShoes() {
    this.settingsService.getShoes().subscribe({
      next: (data: ShoesDef) => {
        this.shoes = data;
        this.isLoading = false;
        // console.log(this.shoes);
      },
      error: (error: any) => console.error('Got an error: ', error)
    });
  }

  selectFilter(brand: ShoesBrand) {
    console.log(brand);
    const index = this.filterBrands.indexOf(brand);
    if (index >= 0) {
      this.filterBrands.splice(index, 1);
    } else {
      this.filterBrands.push(brand);
    }
    console.log(this.filterBrands);
  }

  selectAll() {
    this.filterBrands.length = 0;
    let brand: keyof typeof ShoesBrand;
    for(brand in ShoesBrand) {
      this.filterBrands.push(ShoesBrand[brand]);
    }
  }

  deselectAll() {
    this.filterBrands.length = 0;
  }

  sortShoesByMiles(dir: string) {
    this.isSortingMiles = true;
    this.isSortingCost = false;
    if (dir === '↑') {
      this.shoes.shoes.sort((a, b) => {
        if (a.miles < b.miles) {
          return 1;
        }
        if (a.miles > b.miles) {
          return -1;
        }
        return 0;
      });
      this.sortDirection = '↓';
    }
    if (dir === '↓') {
      this.shoes.shoes.sort((a, b) => {
        if (a.miles < b.miles) {
          return -1;
        }
        if (a.miles > b.miles) {
          return 1;
        }
        return 0;
      });
      this.sortDirection = '↑';
    }
  }

  sortShoesByCost(dir: string) {
    this.isSortingMiles = false;
    this.isSortingCost = true;
    if (dir === '↑') {
      this.shoes.shoes.sort((a, b) => {
        if (a.cost < b.cost) {
          return 1;
        }
        if (a.cost > b.cost) {
          return -1;
        }
        return 0;
      });
      this.sortDirection = '↓';
    }
    if (dir === '↓') {
      this.shoes.shoes.sort((a, b) => {
        if (a.cost < b.cost) {
          return -1;
        }
        if (a.cost > b.cost) {
          return 1;
        }
        return 0;
      });
      this.sortDirection = '↑';
    }
  }
}
