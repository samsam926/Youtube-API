import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoVideoComponent } from './lo-video.component';

describe('LoVideoComponent', () => {
  let component: LoVideoComponent;
  let fixture: ComponentFixture<LoVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
