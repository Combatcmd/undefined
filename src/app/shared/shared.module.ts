import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { StompRService } from "@stomp/ng2-stompjs";

import { SearchService } from "./services/search.service";

import { UtilsService } from "./utils/utils.service";

import { AccountService } from "./auth/account.service";
import { AuthServerProvider } from "./auth/auth-jwt.service";
import { Principal } from "./auth/principal.service";

import { JhiTrackerService } from "./tracker/tracker.service";
import { WindowRef } from "./tracker/window.service";

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    SearchService,
    UtilsService,
    StompRService,
    AccountService,
    AuthServerProvider,
    Principal,
    WindowRef,
    JhiTrackerService
  ],
  entryComponents: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
