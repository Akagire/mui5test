import * as React from 'react';
import Button from '@mui/material/Button';

import { muiTheme } from '../utils/muiTheme';

const index = (): JSX.Element => {
  return (
    <div style={{
      margin: '10px'
    }}>
      <Button variant="contained">Hello world</Button>
    </div>
  );
};

export default index;
