import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NavbarComponent } from './layout/navbar/navbar.component';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { CodePaneComponent } from './code-pane/code-pane.component';
import { CodeModule } from './custom-elements/code/code.module';
import { CodeExampleModule } from './custom-elements/code/code-example.module';
import { AngularCoreModule } from './angular-core/angular-core.module';
import { FeatureModule } from './feature/feature.module';
import { BestPracticesModule } from './best-practices/best-practices.module';
import { ReferenceModule } from './reference/reference.module';
// import { PropertyBindingComponent } from './best-practices/property-binding/property-binding.component';
// import { HttpClientComponent } from './http-client/http-client.component';
// import { ComponentsComponent } from './angular-core/components/components.component';
// import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    // PropertyBindingComponent,
    // HttpClientComponent,
    // ComponentsComponent,
    // CodePaneComponent,
    // NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    // LayoutModule
    CodeModule,
    CodeExampleModule,
    AngularCoreModule,
    FeatureModule,
    BestPracticesModule,
    ReferenceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
