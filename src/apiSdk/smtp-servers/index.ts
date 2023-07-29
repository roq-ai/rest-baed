import axios from 'axios';
import queryString from 'query-string';
import { SmtpServerInterface, SmtpServerGetQueryInterface } from 'interfaces/smtp-server';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSmtpServers = async (
  query?: SmtpServerGetQueryInterface,
): Promise<PaginatedInterface<SmtpServerInterface>> => {
  const response = await axios.get('/api/smtp-servers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSmtpServer = async (smtpServer: SmtpServerInterface) => {
  const response = await axios.post('/api/smtp-servers', smtpServer);
  return response.data;
};

export const updateSmtpServerById = async (id: string, smtpServer: SmtpServerInterface) => {
  const response = await axios.put(`/api/smtp-servers/${id}`, smtpServer);
  return response.data;
};

export const getSmtpServerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/smtp-servers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSmtpServerById = async (id: string) => {
  const response = await axios.delete(`/api/smtp-servers/${id}`);
  return response.data;
};
