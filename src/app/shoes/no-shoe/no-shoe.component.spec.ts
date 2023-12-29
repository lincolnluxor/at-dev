import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoShoeComponent } from './no-shoe.component';

describe('NoShoeComponent', () => {
  let component: NoShoeComponent;
  let fixture: ComponentFixture<NoShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoShoeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
