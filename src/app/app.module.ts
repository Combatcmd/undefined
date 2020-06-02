import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { NgxWebstorageModule } from 'ngx-webstorage'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppState } from './app.service'

import { HomepageModule } from './homepage'

import { FaqModule, InstructionsModule, SearchModule } from './external'

import {
  ExternalTemplateComponent,
  ExternalFooterComponent,
  ExternalHeaderComponent,
} from './layouts'

import { ComponentsModule } from './components'
import { SharedModule } from './shared'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json')
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru',
    }),
    AppRoutingModule,
    NgbModule,
    HomepageModule,
    FaqModule,
    InstructionsModule,
    SearchModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [AppState],
  bootstrap: [AppComponent],
})
export class AppModule {}
