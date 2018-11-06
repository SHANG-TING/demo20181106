import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { UsageComponent } from './usage/usage.component';
import { NgTemplateOutletExampleComponent } from './ng-template-outlet-example/ng-template-outlet-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOrListViewComponent,
    UsageComponent,
    NgTemplateOutletExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
