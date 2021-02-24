import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHederComponent } from './ui-heder.component';

describe('UiHederComponent', () => {
  let component: UiHederComponent;
  let fixture: ComponentFixture<UiHederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiHederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
