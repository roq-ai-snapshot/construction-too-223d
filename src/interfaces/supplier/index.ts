import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface SupplierInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  email?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  store?: StoreInterface[];

  _count?: {
    store?: number;
  };
}

export interface SupplierGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  email?: string;
  name?: string;
  tenant_id?: string;
}
