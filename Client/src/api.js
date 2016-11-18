//@flow

import type { Entity } from './entity';

export function getEntity(): Promise<Entity> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  };
  return fetch('api/test', options).then(r => {
    if (r.status === 200)
      return r.json();
    // Сообщение об ошибке.
    throw new Error('Error: ' + r.statusText);
  });
}