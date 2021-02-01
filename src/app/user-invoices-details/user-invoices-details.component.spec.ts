import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInvoicesDetailsComponent } from './user-invoices-details.component';

describe('UserInvoicesDetailsComponent', () => {
  let component: UserInvoicesDetailsComponent;
  let fixture: ComponentFixture<UserInvoicesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInvoicesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInvoicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
