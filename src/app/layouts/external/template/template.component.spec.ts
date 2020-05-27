import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalTemplateComponent } from './template.component';

describe('ExternalTemplateComponent', () => {
  let component: ExternalTemplateComponent;
  let fixture: ComponentFixture<ExternalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
