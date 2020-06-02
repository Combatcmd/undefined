import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StompRService } from '@stomp/ng2-stompjs';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchService } from './services/search.service';
import { EntryService } from './services/entry.service';
import { UtilsService } from './utils/utils.service';
import { AccountService } from './auth/account.service';
import { AuthServerProvider } from './auth/auth-jwt.service';
import { Principal } from './auth/principal.service';
import { JhiTrackerService } from './tracker/tracker.service';
import { WindowRef } from './tracker/window.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    SearchService,
    EntryService,
    UtilsService,
    StompRService,
    AccountService,
    AuthServerProvider,
    Principal,
    WindowRef,
    JhiTrackerService,
  ],
  entryComponents: [],
  exports: [TranslateModule, FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
