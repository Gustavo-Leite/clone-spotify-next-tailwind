import {
  HeartStraight,
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  List,
  Screencast,
  SpeakerHigh,

} from 'phosphor-react';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 xl:px-6 xl:py-4 flex w-full items-center justify-between lg:py-2.5 lg:px-3.5">
      <div className='flex items-center gap-3'>
        <Image src='/tulips-roses.jfif' className='xl:w-16 xl:h-16 lg:w-12 lg:h-12' width={56} height={56} alt='Capa album' />
        <div className='flex flex-col'>
          <strong className='font-normal lg:text-sm'>Tulips & Roses</strong>
          <span className='text-xs text-zinc-400'>G-Eazy</span>
        </div>
        <div>
          <HeartStraight className='xl:w-5 xl:h-5 lg:w-4 lg:h-4' weight='fill' color='#22C55E' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-6'>
          <Shuffle size={20} className='text-zinc-200 xl:w-8 lg:w-5' />
          <SkipBack weight='fill' size={20} className='text-zinc-200 xl:w-8 lg:w-5' />
          <button className='xl:w-10 xl:h-10 flex items-center justify-center rounded-full bg-zinc-700 text-black lg:w-9 lg:h-9'>
            <Play weight='fill' color='#FFF' size={20} className= 'xl:w-8 lg:w-5' />
          </button>
          <SkipForward weight='fill' size={20} className='text-zinc-200 xl:w-8 lg:w-5' />
          <Repeat size={20} className='text-zinc-200 xl:w-8 lg:w-5' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:31</span>
          <div className='xl:h-1 rounded-full w-96 bg-zinc-600 lg:h-0.5'>
            <div className='bg-zinc-200 w-40 xl:h-1 rounded-full lg:h-0.5'></div>
          </div>
          <span className='text-xs text-zinc-400'>2:31</span>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <List size={20} className='xl:w-8 lg:w-5' weight='fill' />
        <Screencast size={20} className='xl:w-8 lg:w-5' />
        <div className='flex items-center gap-2'>
          <SpeakerHigh size={20} className='xl:w-8 lg:w-5' />
          <div className='xl:h-1 rounded-full w-24 bg-zinc-600 lg:h-0.5'>
            <div className='bg-zinc-200 w-10 xl:h-1 rounded-full lg:h-0.5'></div>
          </div>
        </div>
      </div>
    </footer>
  );
}