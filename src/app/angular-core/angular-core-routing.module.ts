import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplatesComponent } from './templates/templates.component';

const baseUrl: string = 'angular-core';

const routes: Routes = [
    { path: `${baseUrl}/components`, component: ComponentsComponent },
    { path: `${baseUrl}/templates`,  component: TemplatesComponent },
    { path: `${baseUrl}/directives`,  component: DirectivesComponent },
    { path: `${baseUrl}/dependency-injection`,  component: DependencyInjectionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularCoreRoutingModule { }
