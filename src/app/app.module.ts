import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageModule } from "./homepage";
import { ExternalTemplateComponent, ExternalFooterComponent, ExternalHeaderComponent } from './layouts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, ExternalTemplateComponent, ExternalHeaderComponent, ExternalFooterComponent],
  imports: [BrowserModule, AppRoutingModule, HomepageModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
