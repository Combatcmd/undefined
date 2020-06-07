import { NgModule } from '@angular/core';

import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { SelectModule } from './select/select.module';

@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  entryComponents: [],
  exports: [AutocompleteModule, SelectModule],
})
export class ComponentsModule {}
