import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface EmailInboxInterface {
  id?: string;
  email_address: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  _count?: {};
}

export interface EmailInboxGetQueryInterface extends GetQueryInterface {
  id?: string;
  email_address?: string;
  startup_id?: string;
}
