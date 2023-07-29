import { EmailInboxInterface } from 'interfaces/email-inbox';
import { SmtpServerInterface } from 'interfaces/smtp-server';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StartupInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  email_inbox?: EmailInboxInterface[];
  smtp_server?: SmtpServerInterface[];
  user?: UserInterface;
  _count?: {
    email_inbox?: number;
    smtp_server?: number;
  };
}

export interface StartupGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
