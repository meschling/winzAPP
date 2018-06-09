import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VineyardDetailsComponent } from './vineyard-details.component';

describe('VineyardDetailsComponent', () => {
  let component: VineyardDetailsComponent;
  let fixture: ComponentFixture<VineyardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VineyardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VineyardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
