import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceheadlineComponent } from './sourceheadline.component';

describe('SourceheadlineComponent', () => {
  let component: SourceheadlineComponent;
  let fixture: ComponentFixture<SourceheadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceheadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceheadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
