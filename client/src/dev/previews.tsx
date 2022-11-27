import React from 'react';

import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ComponentPreviews = () => {
  return (
    <Previews palette={ <PaletteTree/> }>
      <ComponentPreview path="/CustomNavLink">
        <></>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
