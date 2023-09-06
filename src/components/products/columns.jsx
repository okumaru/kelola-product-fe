import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../shadcn/dropdown-menu.jsx"
import { Button } from "../shadcn/button.jsx";

import DialogUpdateProduct from "./update-product.jsx"
import DialogDeleteProduct from './delete-product.jsx';

export const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "category",
    header: "Kategori",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original

      return <div className="flex space-x-2">
        <DialogUpdateProduct product={product} />
        <DialogDeleteProduct product={product} />
      </div>
    },
  },
]