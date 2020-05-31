import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';
import { InstructionsRoute } from './instructions.route';
import { InstructionsComponent, SafePipe } from './instructions.component';
import { InstructionsService } from './instructions.service';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([InstructionsRoute])],
  declarations: [InstructionsComponent, SafePipe],
  entryComponents: [InstructionsComponent],
  providers: [InstructionsService],
})
export class InstructionsModule {}
