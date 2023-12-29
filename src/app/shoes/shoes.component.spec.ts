import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ShoesComponent } from './shoes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShoesComponent', () => {
  let component: ShoesComponent;
  let fixture: ComponentFixture<ShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesComponent, MatCardModule, MatChipsModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
