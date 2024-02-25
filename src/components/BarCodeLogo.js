import React from 'react';
import Barcode from 'react-barcode';

function BarCodeLogo() {
  return (
      <Barcode value="made in Ukraine" width={1.2} height={25} background='#E6E6E6' lineColor='#39393A' fontSize={15} />
  );
}

export default BarCodeLogo;
