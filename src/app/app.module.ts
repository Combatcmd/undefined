import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxWebstorageModule } from "ngx-webstorage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppState } from "./app.service";

import { HomepageModule } from "./homepage";
import { FaqModule, InstructionsModule } from "./external";
import {
  ExternalTemplateComponent,
  ExternalFooterComponent,
  ExternalHeaderComponent,
} from "./layouts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "./shared";

@NgModule({
  declarations: [
    AppComponent,
    ExternalTemplateComponent,
    ExternalHeaderComponent,
    ExternalFooterComponent,
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    HomepageModule,
    FaqModule,
    InstructionsModule,
    SharedModule,
  ],
  providers: [AppState],
  bootstrap: [AppComponent],
})
export class AppModule {}
