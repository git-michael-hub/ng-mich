import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingFeatureModulesComponent } from './lazy-loading-feature-modules.component';

describe('LazyLoadingFeatureModulesComponent', () => {
  let component: LazyLoadingFeatureModulesComponent;
  let fixture: ComponentFixture<LazyLoadingFeatureModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingFeatureModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingFeatureModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
