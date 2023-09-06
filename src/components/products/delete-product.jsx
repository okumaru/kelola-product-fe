import * as React from 'react';
import { Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '../shadcn/dialog.jsx';
import { Button } from '../shadcn/button.jsx';

export default function DialogDeleteProduct({...props}) {
  const { product } = props;

  const submitDelete = () => {
    let endpoint = `http://localhost:8000/api/${product.id}`;
  
    fetch(endpoint, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok)
          window.location.reload();
      });
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" >
            <Trash2 className='w-4 h-4' />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              product and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="destructive" onClick={submitDelete} >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
