import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FaqRoute } from "./faq.route";
import { FaqComponent } from "./faq.component";
import { FaqService } from "./faq.service";

@NgModule({
  imports: [RouterModule.forChild([FaqRoute])],
  declarations: [FaqComponent],
  entryComponents: [FaqComponent],
  providers: [FaqService],
})
export class FaqModule {}
