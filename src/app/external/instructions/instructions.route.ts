import { Route } from "@angular/router";
import { InstructionsComponent } from "./instructions.component";

export const InstructionsRoute: Route = {
  path: "instructions",
  component: InstructionsComponent,
  data: {
    pageTitle: "Instructions",
  },
};
