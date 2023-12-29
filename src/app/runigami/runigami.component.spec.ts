import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunigamiComponent } from './runigami.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RunigamiComponent', () => {
  let component: RunigamiComponent;
  let fixture: ComponentFixture<RunigamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunigamiComponent, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunigamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
