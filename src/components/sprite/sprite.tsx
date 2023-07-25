import { memo } from 'react';

export const Sprite = memo(() => (
  <svg style={{ width: '0', height: '0', overflow: 'hidden' }}>
    <symbol viewBox='0 0 64 64' id='play'>
      <path
        fill='CurrentColor'
        d='M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26zM24 18l24 14-24 14z'
      />
    </symbol>
    <symbol viewBox='0 0 64 64' id='pause'>
      <path
        fill='#fff'
        d='M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26zM20 20h8v24h-8zM36 20h8v24h-8z'
      />
    </symbol>
  </svg>
));

Sprite.displayName = 'Sprite';
