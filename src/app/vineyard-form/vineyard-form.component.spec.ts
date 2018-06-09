import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VineyardFormComponent } from './vineyard-form.component';

describe('VineyardFormComponent', () => {
  let component: VineyardFormComponent;
  let fixture: ComponentFixture<VineyardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VineyardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VineyardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
