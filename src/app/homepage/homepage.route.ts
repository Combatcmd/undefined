import { Route } from "@angular/router";
import { HomepageComponent } from "./homepage.component";

export const HomepageRoute: Route = {
  path: "",
  component: HomepageComponent,
  data: {
    pageTitle: "Homepage",
  },
};
