import { Route } from '@angular/router';
import { FaqComponent } from './faq.component';

export const FaqRoute: Route = {
  path: 'faq',
  component: FaqComponent,
  data: {
    pageTitle: 'FAQ',
  },
};
