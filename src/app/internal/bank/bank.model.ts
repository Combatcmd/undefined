import { BaseEntity } from '../../shared';

export class Bank implements BaseEntity {
    constructor(
        public id?: number,
        public bik?: string,
        public ru?: string,
        public kk?: string,
        public en?: string,
        public addressRu?: string,
        public addressKk?: string,
        public addressEn?: string,
    ) {
    }
}
