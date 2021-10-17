import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InjectionTokensComponent } from "./injection-tokens/injection-tokens.component";
import { LazyLoadingFeatureModulesComponent } from "./lazy-loading-feature-modules/lazy-loading-feature-modules.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";

const baseUrl: string = 'best-practices';

const routes: Routes = [
    { path: `${baseUrl}/property-binding`, component: PropertyBindingComponent },
    { path: `${baseUrl}/lazy-module`, component: LazyLoadingFeatureModulesComponent},
    { path: `${baseUrl}/injection-tokens`, component: InjectionTokensComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestPracticesRoutingModule { }