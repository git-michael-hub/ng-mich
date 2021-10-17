import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { FormsComponent } from './forms/forms.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';
import { TestingComponent } from './testing/testing.component';

const baseUrl: string = 'feature';

const routes: Routes = [
    { path: `${baseUrl}/routing-navigation`, component: RoutingNavigationComponent },
    { path: `${baseUrl}/forms`, component: FormsComponent },
    { path: `${baseUrl}/http-client`, component: HttpClientComponent },
    { path: `${baseUrl}/testing`, component: TestingComponent },
    { path: `${baseUrl}/animations`, component: AnimationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
