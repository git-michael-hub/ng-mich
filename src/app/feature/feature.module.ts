import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';
import { CodeExampleModule } from '../custom-elements/code/code-example.module';
import { CodeModule } from '../custom-elements/code/code.module';
import { MaterialModule } from '../material-module';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsComponent } from './forms/forms.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { TestingComponent } from './testing/testing.component';
import { AnimationsComponent } from './animations/animations.component';



@NgModule({
  declarations: [
    RoutingNavigationComponent,
    FormsComponent,
    HttpClientComponent,
    TestingComponent,
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    CodeModule,
    CodeExampleModule,
  ]
})
export class FeatureModule { }
