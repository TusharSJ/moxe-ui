import { IHospital } from "./hospital";

export interface IProvider {
  id: number;
  name?: string | null;
  specialty?: string | null;
  hospital?: Pick<IHospital, 'id'> | null;
}

export type NewProvider = Omit<IProvider, 'id'> & { id: null };