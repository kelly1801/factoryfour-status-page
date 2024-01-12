/**
 * Array of FactoryFour API endpoints.
 *
 * @constant
 * @type {string[]}
 *
 * @description
 * Represents a list of available API endpoints that can be used to query health status.
 * Each endpoint corresponds to a specific aspect of the FactoryFour system.
 *
 * @example
 * // Example usage of API_ENDPOINTS array
 * import { API_ENDPOINTS } from './path/to/your/module';
 *
 * console.log(API_ENDPOINTS);
 * // Output: ['accounts', 'assets', 'customers', ...]
 */
export const API_ENDPOINTS = [
    'accounts', 'assets', 'customers', 'datapoints', 'devices', 'documents', 'forms',
    'invites', 'media', 'messages', 'namespaces', 'orders', 'patients', 'relationships',
    'rules', 'templates', 'users', 'workflows'
  ];
  