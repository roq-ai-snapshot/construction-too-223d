interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee'],
  tenantName: 'Supplier',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own information',
    'Manage own bookings',
    'View available tools',
    'View store information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage supplier information',
    'Manage customer information',
    'Manage store information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/90f6ee05-c6bb-4b86-b248-b9cc18eeba1a',
};
