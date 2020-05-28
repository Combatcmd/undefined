import { BaseEntity } from "../../shared";

export class Entry implements BaseEntity {
  constructor(
    public id?: number,
    public code?: string,
    public ru?: string,
    public kk?: string,
    public en?: string,
    public deleted?: boolean,
    public dictionary?: BaseEntity
  ) {
    this.deleted = false;
  }
}
