"use client"
import Image from 'next/image'; 
import { UserButton } from '@clerk/nextjs';
import SearchSection from '@/components/Home/SearchSection';
import GoogleMapsSection from '@/components/Home/GoogleMapsSection';
export default function Home() {
  return (
   <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
    <div>
      <SearchSection/>

    </div>
    <div className=''>
      <GoogleMapsSection/>

    </div>

   </div>
  );
}
