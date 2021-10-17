import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestPracticesRoutingModule } from './best-practices-routing.module';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { MaterialModule } from '../material-module';
import { CodeModule } from '../custom-elements/code/code.module';
import { CodeExampleModule } from '../custom-elements/code/code-example.module';
import { LazyLoadingFeatureModulesComponent } from './lazy-loading-feature-modules/lazy-loading-feature-modules.component';
import { InjectionTokensComponent } from './injection-tokens/injection-tokens.component';



@NgModule({
  declarations: [
    PropertyBindingComponent,
    LazyLoadingFeatureModulesComponent,
    InjectionTokensComponent
  ],
  imports: [
    CommonModule,
    BestPracticesRoutingModule,
    MaterialModule,
    CodeModule,
    CodeExampleModule,
  ]
})
export class BestPracticesModule { }
