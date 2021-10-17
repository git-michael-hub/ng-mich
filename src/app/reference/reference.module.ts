import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptualComponent } from './conceptual/conceptual.component';
import { MaterialModule } from '../material-module';
import { CodeExampleModule } from '../custom-elements/code/code-example.module';
import { CodeModule } from '../custom-elements/code/code.module';
import { ReferenceRoutingModule } from './reference-routing.module';
import { GlossaryComponent } from './glossary/glossary.component';



@NgModule({
  declarations: [
    ConceptualComponent,
    GlossaryComponent
  ],
  imports: [
    CommonModule,
    ReferenceRoutingModule,
    MaterialModule,
    CodeModule,
    CodeExampleModule,
  ]
})
export class ReferenceModule { }
