import { PreventScrolling, RouterBack } from '@/components/Modal'
import React from 'react'

// Menggunakan `searchParams` dari Next.js
type Props = {
  searchParams: {
    modal?: string; // Menambahkan `?` agar tidak error jika tidak ada
    [key: string]: string | undefined;
  };
};

function Page({ searchParams }: Props) {
  if (searchParams.modal && searchParams.modal !== "") {
    return (
      <>
        <div className="fixed bg-black/80 z-50 inset-0 flex items-center justify-center">
          <div className="bg-white max-w-xl p-4 rounded-2xl min-h-44 relative z-20">
            {/* catch searchParam modal di sini */}
          </div>
          <RouterBack />
        </div>
        <PreventScrolling />
      </>
    );
  }

  return null;
}

export default Page;
