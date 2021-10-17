import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionTokensComponent } from './injection-tokens.component';

describe('InjectionTokensComponent', () => {
  let component: InjectionTokensComponent;
  let fixture: ComponentFixture<InjectionTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionTokensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
