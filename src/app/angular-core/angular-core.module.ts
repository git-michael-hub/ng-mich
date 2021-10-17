import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AngularCoreRoutingModule } from './angular-core-routing.module';
import { MaterialModule } from '../material-module';
import { CodeModule } from '../custom-elements/code/code.module';
import { CodeExampleModule } from '../custom-elements/code/code-example.module';
import { TemplatesComponent } from './templates/templates.component';
import { DirectivesComponent } from './directives/directives.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    TemplatesComponent,
    DirectivesComponent,
    DependencyInjectionComponent
  ],
  imports: [
    CommonModule,
    AngularCoreRoutingModule,
    MaterialModule,
    CodeModule,
    CodeExampleModule,
  ]
})
export class AngularCoreModule { }
