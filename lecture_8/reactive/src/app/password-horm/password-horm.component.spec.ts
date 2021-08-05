import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordHormComponent } from './password-horm.component';

describe('PasswordHormComponent', () => {
  let component: PasswordHormComponent;
  let fixture: ComponentFixture<PasswordHormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordHormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordHormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
