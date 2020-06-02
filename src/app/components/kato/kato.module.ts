import { NgModule } from '@angular/core'

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../shared'

import { KatoComponent } from './kato.compoent'

@NgModule({
  imports: [SharedModule, FontAwesomeModule],
  declarations: [KatoComponent],
  providers: [],
  entryComponents: [],
  exports: [KatoComponent],
})
export class KatoModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee)
  }
}
