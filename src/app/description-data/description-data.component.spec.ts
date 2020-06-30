import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionDataComponent } from './description-data.component';

describe('DescriptionDataComponent', () => {
  let component: DescriptionDataComponent;
  let fixture: ComponentFixture<DescriptionDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
