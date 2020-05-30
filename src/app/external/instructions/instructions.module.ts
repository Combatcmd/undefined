import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InstructionsRoute } from './instructions.route';
import { InstructionsComponent } from './instructions.component';

@NgModule({
  imports: [RouterModule.forChild([InstructionsRoute])],
  declarations: [InstructionsComponent],
  entryComponents: [InstructionsComponent],
  providers: [],
})
export class InstructionsModule {}
