import logo from '../logo.svg';

import * as React from 'react';
import DialogAddProduct from './products/add-product.jsx';

export default function SidebarComponent() {
  return (
    <div id="sidebar" className="flex-none border-r">
      <div className="flex justify-center">
        <img src={logo} className="App-logo w-28 h-28" alt="logo" />
      </div>
      <div>
        <DialogAddProduct />
      </div>
    </div>
  );
}
