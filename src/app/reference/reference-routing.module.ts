import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConceptualComponent } from "./conceptual/conceptual.component";
import { GlossaryComponent } from "./glossary/glossary.component";

const baseUrl: string = 'reference';

const routes: Routes = [
    { path: `${baseUrl}/conceptual`, component: ConceptualComponent },
    { path: `${baseUrl}/glossary`, component: GlossaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceRoutingModule { }