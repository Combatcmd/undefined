import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalFooterComponent } from './footer.component';

describe('ExternalFooterComponent', () => {
  let component: ExternalFooterComponent;
  let fixture: ComponentFixture<ExternalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
