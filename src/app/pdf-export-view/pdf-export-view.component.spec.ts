import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfExportViewComponent } from './pdf-export-view.component';

describe('PdfExportViewComponent', () => {
  let component: PdfExportViewComponent;
  let fixture: ComponentFixture<PdfExportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfExportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfExportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
