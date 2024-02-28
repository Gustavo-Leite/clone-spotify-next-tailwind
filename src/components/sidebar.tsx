import {
  ArrowRight,
  House,
  MagnifyingGlass,
  Playlist,
  Plus
} from 'phosphor-react';
import Image from 'next/image';

export const Sidebar = () => {
  return (
    <aside className="bg-zinc-950 p-2 xl:w-96 lg:w-80 md:w-60 sm:w-64">

      <nav className="bg-zinc-900 rounded-md p-4 xl:space-y-5 lg:space-y-3">
        <a href="#" className='flex item-center gap-3 font-medium text-zinc-200 xl:text-sm lg:text-xs'>
          <House className='xl:w-10 lg:w-5' size={24} weight="fill" />
          Inicio
        </a>
        <a href="#" className='flex item-center gap-3 text-sm font-medium text-zinc-200 xl:text-sm lg:text-xs'>
          <MagnifyingGlass className='xl:w-10 lg:w-5' size={24} />
          Buscas
        </a>
      </nav>

      <nav className='mt-2 bg-zinc-900 rounded-md p-4'>
        <div className='flex item-center justify-between'>
          <a href='#' className='flex item-center gap-3 font-medium text-zinc-200 xl:text-sm lg:text-xs'>
            <Playlist className='xl:w-10 lg:w-5' size={24} />
            Sua Biblioteca
          </a>
          <a className='flex gap-3'>
            <Plus className='xl:w-10 lg:w-5' size={20} />
            <ArrowRight className='xl:w-10 lg:w-5' size={20} />
          </a>
        </div>

        <div className='flex items-center justify-center mt-4 gap-3 xl:gap-3 lg:gap-2'>
          <a href="#" className='font-medium text-zinc-200 xl:text-sm lg:text-xs'>Playlist</a>
          <a href="#" className='font-medium text-zinc-200 xl:text-sm lg:text-xs'>Artistas</a>
          <a href="#" className='font-medium text-zinc-200 xl:text-sm lg:text-xs'>Álbuns</a>
          <a href="#" className='font-medium text-zinc-200 xl:text-sm lg:text-xs'>Podcasts e programas</a>
        </div>

        <div className='flex my-4 items-center justify-between'>
          <a href="#">
            <MagnifyingGlass className='xl:w-10 lg:w-5' size={20} />
          </a>
          <select className='w-20 bg-zinc-900 font-medium xl:text-sm lg:text-xs' name="types" id="gender">
            <option className='font-medium text-zinc-200 xl:text-sm lg:text-xs' value="classificar-por">Classificar por</option>
            <option className='font-medium text-zinc-200 xl:text-sm lg:text-xs' value="recentes">Recentes</option>
            <option className='font-medium text-zinc-200 xl:text-sm lg:text-xs' value="adicionados-recentemente">Adicionados recentemente</option>
            <option className='font-medium text-zinc-200 xl:text-sm lg:text-xs' value="ordem-alfabética">Ordem alfabética</option>
            <option className='font-medium text-zinc-200 xl:text-sm lg:text-xs' value="criador">Criador</option>
          </select>
        </div>

        <nav className='flex flex-col gap-3'>
          <div className='flex gap-3'>
            <Image src='/musicas-curtidas.png' className='rounded-md xl:w-12 xl:h-12 lg:w-10 lg:h-10' width={42} height={42} alt='Capa album' />
            <div className=''>
              <a href="#" className='flex flex-row items-center gap-3 text-sm font-medium text-zinc-100 lg:text-xs'>
                Musícas Curtidas
              </a>
              <a href="#" className='flex flex-row items-center gap-3 text-sm font-medium text-zinc-100 lg:text-xs'>
                Playlist * 188 músicas
              </a>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src='/minha-playlist-antigas.jfif' className='rounded-md xl:w-12 xl:h-12 lg:w-10 lg:h-10' width={42} height={42} alt='Capa album' />
            <div className=''>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                Antigas
              </a>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                Playlist * UserName
              </a>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src='/pod-akita.jpg' className='rounded-md xl:w-12 xl:h-12 lg:w-10 lg:h-10' width={42} height={42} alt='Capa album' />
            <div className=''>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                Akitando
              </a>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                Podcast * Fabio Akita
              </a>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src='/g-eazy.jpg' className='rounded-full xl:w-12 xl:h-12 lg:w-10 lg:h-10' width={42} height={42} alt='Capa album' />
            <div className=''>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                G-Eazy
              </a>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                Artista
              </a>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src='/album-auge.jfif' className='rounded-md xl:w-12 xl:h-12 lg:w-10 lg:h-10' width={42} height={42} alt='Capa album' />
            <div className=''>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                AUGE
              </a>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                Costa Gold
              </a>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src='/pod-fala-dev.jfif' className='rounded-md xl:w-12 xl:h-12 lg:w-10 lg:h-10' width={42} height={42} alt='Capa album' />
            <div className=''>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                Podcast
              </a>
              <a href="#" className='flex flex-row items-center gap-3 xl:text-sm font-medium text-zinc-100 lg:text-xs'>
                Rocketseat
              </a>
            </div>
          </div>
        </nav>
      </nav>


    </aside>
  );
};
