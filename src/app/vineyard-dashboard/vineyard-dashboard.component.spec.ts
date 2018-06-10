import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VineyardDashboardComponent } from './vineyard-dashboard.component';

describe('VineyardDashboardComponent', () => {
  let component: VineyardDashboardComponent;
  let fixture: ComponentFixture<VineyardDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VineyardDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VineyardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
