import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  price_per_day: number;
  store_id: string;
  created_at?: any;
  updated_at?: any;

  store?: StoreInterface;
  _count?: {};
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  store_id?: string;
}
