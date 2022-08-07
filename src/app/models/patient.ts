import { IProvider } from './provider';
import { Sex } from './sex.model';

export interface IPatient {
  id?: number;
  name: string;
  dateOfBirth?: Date;
  sex?: Sex | null;
  provider?: Pick<IProvider, 'id'> | null;
}

export type NewPatient = Omit<IPatient, 'id'> & { id: null };