import { NgModule } from '@angular/core'

import { KatoModule } from './kato/kato.module'

import { AutocompleteModule } from './autocomplete/autocomplete.module'

@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  entryComponents: [],
  exports: [KatoModule, AutocompleteModule],
})
export class ComponentsModule {}
