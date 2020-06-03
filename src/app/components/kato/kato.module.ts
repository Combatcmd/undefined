import { NgModule } from '@angular/core'

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { SharedModule } from '../../shared'

import { KatoComponent } from './kato.compoent'
import { KatoService } from './kato.service'

@NgModule({
  imports: [SharedModule, FontAwesomeModule],
  declarations: [KatoComponent],
  providers: [KatoService],
  entryComponents: [],
  exports: [KatoComponent],
})
export class KatoModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronDown)
  }
}
