import { StoreInterface } from 'interfaces/store';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  position: string;
  salary: number;
  store_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  store?: StoreInterface;
  user?: UserInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  store_id?: string;
  user_id?: string;
}
