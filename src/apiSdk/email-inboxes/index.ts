import axios from 'axios';
import queryString from 'query-string';
import { EmailInboxInterface, EmailInboxGetQueryInterface } from 'interfaces/email-inbox';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmailInboxes = async (
  query?: EmailInboxGetQueryInterface,
): Promise<PaginatedInterface<EmailInboxInterface>> => {
  const response = await axios.get('/api/email-inboxes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmailInbox = async (emailInbox: EmailInboxInterface) => {
  const response = await axios.post('/api/email-inboxes', emailInbox);
  return response.data;
};

export const updateEmailInboxById = async (id: string, emailInbox: EmailInboxInterface) => {
  const response = await axios.put(`/api/email-inboxes/${id}`, emailInbox);
  return response.data;
};

export const getEmailInboxById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/email-inboxes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEmailInboxById = async (id: string) => {
  const response = await axios.delete(`/api/email-inboxes/${id}`);
  return response.data;
};
