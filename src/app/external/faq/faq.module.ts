import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FaqRoute } from "./faq.route";
import { FaqComponent } from "./faq.component";

@NgModule({
  imports: [RouterModule.forChild([FaqRoute])],
  declarations: [FaqComponent],
  entryComponents: [FaqComponent],
  providers: [],
})
export class FaqModule {}
