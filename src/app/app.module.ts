import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomepageModule } from './homepage'
import {
  ExternalTemplateComponent,
  ExternalFooterComponent,
  ExternalHeaderComponent,
} from './layouts'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SharedModule } from './shared'

@NgModule({
  declarations: [
    AppComponent,
    ExternalTemplateComponent,
    ExternalHeaderComponent,
    ExternalFooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    HomepageModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
