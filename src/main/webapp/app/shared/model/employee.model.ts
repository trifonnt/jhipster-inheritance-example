import { IPerson } from "./person.model";

export interface IEmployee extends IPerson{
  id?: number;
  company?: string;
}

export const defaultValue: Readonly<IEmployee> = {};
