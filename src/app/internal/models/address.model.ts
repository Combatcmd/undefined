import { BaseEntity } from '../../shared';
import { Entry } from './entry.model';

export class Address implements BaseEntity {
    constructor(
        public id?: number,
        public country?: Entry,
        public kato?: any,
        public city?: string,
        public postcode?: string,
        public street?: string,
        public building?: string,
        public flat?: string,
    ) {
    }
}
