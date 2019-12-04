import React, { useEffect } from 'react';
import { logger } from '@foursquare/utils';

function Header() {
  useEffect(() => {
    logger.info('Header loaded.');
  }, []);

  return <header>Foursquare Header</header>;
}

export default Header;
