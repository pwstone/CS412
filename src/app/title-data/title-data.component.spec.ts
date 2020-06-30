import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDataComponent } from './title-data.component';

describe('TitleDataComponent', () => {
  let component: TitleDataComponent;
  let fixture: ComponentFixture<TitleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
