interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Developer'],
  customerRoles: [],
  tenantRoles: ['Developer'],
  tenantName: 'Startup',
  applicationName: 'rest',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
