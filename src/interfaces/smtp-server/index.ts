import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface SmtpServerInterface {
  id?: string;
  server_address: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  _count?: {};
}

export interface SmtpServerGetQueryInterface extends GetQueryInterface {
  id?: string;
  server_address?: string;
  startup_id?: string;
}
