import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardItemDirective } from './card-or-list-view/card-item.directive';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { ListItemDirective } from './card-or-list-view/list-item.directive';
import { NgTemplateOutletExampleComponent } from './ng-template-outlet-example/ng-template-outlet-example.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOrListViewComponent,
    UsageComponent,
    NgTemplateOutletExampleComponent,
    CardItemDirective,
    ListItemDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
