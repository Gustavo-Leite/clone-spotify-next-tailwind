import {
  CaretLeft,
  CaretRight,
  Play
} from 'phosphor-react';

import Image from 'next/image';

export const HomePage = () => {
  return (
    <main className="flex-1 bg-zinc-900 mt-2 p-6 rounded-md overflow-y-scroll h-22">
      <div className='flex items-center gap-2'>
        <button className='rounded-full bg-black/40 p-1'>
          <CaretLeft size={24} />
        </button>
        <button className='rounded-full bg-black/40 p-1'>
          <CaretRight size={24} />
        </button>
      </div>

      <h1 className='font-semibold text-3xl mt-10'>Boa Tarde</h1>

      <div className='grid grid-cols-3 gap-4 mt-4'>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src='/musicas-curtidas.png' className='xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-10 md:h-10 sm:w-6 sm:h-6' width={82} height={82} alt='Capa album' />
          <strong className='xl:text-base lg:text-sm sm:text-xs'>Musícas Curtidas</strong>
          <button className='flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible xl:w-12 xl:h-12 xl:mr-6 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 sm:mr-2'>
            <Play className='lg:w-14 md:w-12' size={20} color='#FFF' weight="fill" />
          </button>
        </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src='/minha-playlist-antigas.jfif' className='xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-10 md:h-10 sm:w-6 sm:h-6' width={82} height={82} alt='Capa album' />
          <strong className='xl:text-base lg:text-sm sm:text-xs'>Antigas</strong>
          <button className='flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible xl:w-12 xl:h-12 xl:mr-6 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 sm:mr-2'>
            <Play className='lg:w-14 md:w-12' size={20} color='#FFF' weight="fill" />
          </button>
        </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src='/pod-akita.jpg' className='xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-10 md:h-10 sm:w-6 sm:h-6' width={82} height={82} alt='Capa album' />
          <strong className='xl:text-base lg:text-sm sm:text-xs'>Akitando</strong>
          <button className='flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible xl:w-12 xl:h-12 xl:mr-6 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 sm:mr-2'>
            <Play className='lg:w-14 md:w-12' size={20} color='#FFF' weight="fill" />
          </button>
        </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src='/g-eazy.jpg' className='xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-10 md:h-10 sm:w-6 sm:h-6' width={82} height={82} alt='Capa album' />
          <strong className='xl:text-base lg:text-sm sm:text-xs'>G-Eazy</strong>
          <button className='flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible xl:w-12 xl:h-12 xl:mr-6 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 sm:mr-2'>
            <Play className='lg:w-14 md:w-12' size={20} color='#FFF' weight="fill" />
          </button>
        </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src='/album-auge.jfif' className='xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-10 md:h-10 sm:w-6 sm:h-6' width={82} height={82} alt='Capa album' />
          <strong className='xl:text-base lg:text-sm sm:text-xs'>AUGE</strong>
          <button className='flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible xl:w-12 xl:h-12 xl:mr-6 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 sm:mr-2'>
            <Play className='lg:w-14 md:w-12' size={20} color='#FFF' weight="fill" />
          </button>
        </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src='/pod-fala-dev.jfif' className='xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-10 md:h-10 sm:w-6 sm:h-6' width={82} height={82} alt='Capa album' />
          <strong className='xl:text-base lg:text-sm sm:text-xs'>Fala Dev</strong>
          <button className='flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible xl:w-12 xl:h-12 xl:mr-6 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 sm:mr-2'>
            <Play className='lg:w-14 md:w-12' size={20} color='#FFF' weight="fill" />
          </button>
        </a>
      </div>

      <h2 className='font-bold text-2xl mt-10'>Seus Programas</h2>

      <div className='grid gap-4 mt-4 3xl:grid-cols-10 2xl:gap-2 2xl:grid-cols-7 xl:grid-cols-5 xl:gap-4 lg:gap-4 md:grid-cols-4 md:gap-2 sm:grid-cols-3 sm:gap-2'>
        <a href='https://open.spotify.com/show/6w9Fcpu5argDMKw73eigwj' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/pod-akita.jpg' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Akitando</strong>
          <span className='text-sm text-zinc-400'>Fabio Akita</span>
        </a>
        <a href='https://open.spotify.com/show/3TNsKUGlP9YbV1pgy3ACrW' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/pod-fala-dev.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Podcast FalaDev</strong>
          <span className='text-sm text-zinc-400'>Rocketseat</span>
        </a>
        <a href='https://open.spotify.com/show/4hlKt74aPrqA03YQNVgpdX' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/pod-american-english.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>American English</strong>
          <span className='text-sm text-zinc-400'>Shana Thompson</span>
        </a>
        <a href='https://open.spotify.com/show/2p0Vx75OmfsXktyLBuLuSf' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/pod-hipers.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Hipers Ponto Tech</strong>
          <span className='text-sm text-zinc-400'>Alura</span>
        </a>
        <a href='https://open.spotify.com/show/0FIW4vq59iKMFgEa0DhNfF' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 xl:block lg:hidden'>
          <Image src='/pod-cafe-ti.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>PodCafé Ti</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>podcafe</span>
        </a>
        <a href='https://open.spotify.com/show/7q5BPHf5O4Z57BVMNkbiHk' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 2xl:block xl:hidden lg:hidden'>
          <Image src='/pod-aries.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Áries Hoje</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Spotify Studios</span>
        </a>
        <a href='https://open.spotify.com/show/0GnKiYeK11476CfoQEYlEd' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:block lg:hidden'>
          <Image src='/pod-mano-a-mano.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Mano a Mano</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Spotify Studios</span>
        </a>
        <a href='https://open.spotify.com/show/2gCj9YG9tjMexhS4pIlRHo' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:hidden lg:hidden'>
          <Image src='/pod-primo-cast.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Primocast</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Grupo Primo</span>
        </a>
        <a href='https://open.spotify.com/show/3uqyj3GlhBHp1IJN8KJ1xU' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:hidden lg:hidden'>
          <Image src='/pod-cafe-debug.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Café Debug</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Café Debug</span>
        </a>
        <a href='https://open.spotify.com/show/29eSlP6rJWrsX4O1SZ8J0z' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:hidden lg:hidden'>
          <Image src='/pod-primo-tech.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Primo Tech</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Grupo Primo</span>
        </a>
      </div>

      <h2 className='font-bold text-2xl mt-10'>Tocados recentemente</h2>

      <div className='grid gap-4 mt-4 3xl:grid-cols-10 2xl:gap-2 2xl:grid-cols-7 xl:grid-cols-5 xl:gap-4 lg:gap-4 md:grid-cols-4 md:gap-2 sm:grid-cols-3 sm:gap-2'>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/g-eazy.jpg' className='w-full rounded-full' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>G-Eazy</strong>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Musicas Curtidas</strong>
          <span className='text-sm text-zinc-400'>188 músicas</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/minha-playlist-antigas.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Antigas</strong>
          <span className='text-sm text-zinc-400'>Playlist</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/album-auge.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>AUGE</strong>
          <span className='text-sm text-zinc-400'>Costa Gold</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 xl:block lg:hidden'>
          <Image src='/pod-akita.jpg' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Akitando</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Fabio Akita</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 2xl:block xl:hidden lg:hidden'>
          <Image src='/pod-fala-dev.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>FalaDev</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Rocketseat</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:block lg:hidden'>
          <Image src='/pod-primo-tech.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>PrimoTech</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Grupo Primo</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:hidden lg:hidden'>
          <Image src='/pod-hipers.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Hipers Ponto Tech</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Alura</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:hidden lg:hidden'>
          <Image src='/pod-cafe-debug.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Café Debug</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Café Debug</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:hidden lg:hidden'>
          <Image src='/tulips-roses.jfif' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>Tulips Roses</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>G-Eazy</span>
        </a>
      </div>

      <h2 className='font-bold text-2xl mt-10'>Suas músicas estão com saudade</h2>

      <div className='grid gap-4 mt-4 3xl:grid-cols-10 2xl:gap-2 2xl:grid-cols-7 xl:grid-cols-5 xl:gap-4 lg:gap-4 md:grid-cols-4 md:gap-2 sm:grid-cols-3 sm:gap-2'>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 xl:block lg:hidden'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 2xl:block xl:hidden lg:hidden'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:block lg:hidden'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:hidden lg:hidden'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:hidden lg:hidden'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
        <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 2xl:w-48 2xl:h-64 rounded-md hover:bg-white/10 3xl:block 2xl:hidden lg:hidden'>
          <Image src='/musicas-curtidas.png' className='w-full rounded-md' width={120} height={120} alt='Capa album' />
          <strong className='font-semibolt'>(music name)</strong>
          <br></br>
          <span className='text-sm text-zinc-400'>Artista</span>
        </a>
      </div>

    </main>
  );
};