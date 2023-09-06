import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './shadcn/avatar';

export default function NavbarComponent() {
  return (
    <div id="navbar" className="flex justify-end p-5 border-b">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
