'use client';
import { HomePage } from '<prefix>/components/home';
import { Footer } from '<prefix>/components/footer';
import { Sidebar } from '<prefix>/components/sidebar';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex overflow-auto flex-1">

        <Sidebar />

        <HomePage />

      </div>

      <div className='absolute bottom-0 left-0 right-0 flex animate-slideup'>

        <Footer />

      </div>

    </div>
  );
}
