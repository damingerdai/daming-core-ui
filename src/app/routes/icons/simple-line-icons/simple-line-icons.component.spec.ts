import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLineIconsComponent } from './simple-line-icons.component';

describe('SimpleLineIconsComponent', () => {
  let component: SimpleLineIconsComponent;
  let fixture: ComponentFixture<SimpleLineIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLineIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLineIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
