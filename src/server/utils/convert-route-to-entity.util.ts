const mapping: Record<string, string> = {
  'email-inboxes': 'email_inbox',
  'smtp-servers': 'smtp_server',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
