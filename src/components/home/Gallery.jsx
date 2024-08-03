import React, { useState } from 'react'
import VideoAlbum from '../common/VideoAlbum'
import PhotoAlbum from '../common/PhotoAlbum'
import MediaAlbum from '../common/MediaAlbum'
import PhotoAlbum2 from '../common/PhotoAlbum'
import { photoalbum, videoalbum, mediaalbum } from '../../data/albums-data'

function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState('PhotoAlbum')

  const getButtonClass = albumType => {
    return activeAlbum === albumType
      ? 'bg-dark-blue text-white'
      : 'bg-white text-black'
  }

  return (
    <section className='relative w-full py-24 bg-white'>
      <div className='w-10/12 mx-auto '>
        <div className='flex-col xxl:pr-1 xmd:flex-col xl:flex-row rounded-3xl xmd:items-center xl:items-start dxs:flex-col dxs:items-center dxs:pl-0 dxs:pr-0 '>
          {/* -------------- heading ----------------- */}

          <div className='flex flex-col gap-y-4 text-resp-black '>
            <h1 className='uppercase text-[32px] font-semibold '>
              Our Gallery
            </h1>

            {/* ----------- small underline ----------- */}
            <div className='w-[70px] h-1 bg-black'></div>
          </div>

          {/* ------------- filter part --------------- */}

          <div className='grid grid-cols-2 gap-2 mt-8 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 dxs:grid-cols-1 dxs:justify-center'>
            <button
              className={`flex text-lg w-48 rounded-sm h-14 items-center justify-center ${getButtonClass(
                'PhotoAlbum'
              )}`}
              onClick={() => setActiveAlbum('PhotoAlbum')}
            >
              PhotoAlbum
            </button>
            <button
              className={`flex text-lg w-48 rounded-sm h-14 items-center justify-center ${getButtonClass(
                'VideoAlbum'
              )}`}
              onClick={() => setActiveAlbum('VideoAlbum')}
            >
              VideoAlbum
            </button>
            <button
              className={`flex text-lg w-48 rounded-sm h-14 items-center justify-center ${getButtonClass(
                'MediaAlbum'
              )}`}
              onClick={() => setActiveAlbum('MediaAlbum')}
            >
              MediaAlbum
            </button>
            <button
              className={`flex text-lg w-48 rounded-sm h-14 items-center justify-center ${getButtonClass(
                'PhotoAlbum2'
              )}`}
              onClick={() => setActiveAlbum('PhotoAlbum2')}
            >
              PhotoAlbum-2
            </button>
            <button
              className={`flex text-lg w-48 rounded-sm h-14 items-center justify-center ${getButtonClass(
                'VideoAlbum2'
              )}`}
              onClick={() => setActiveAlbum('VideoAlbum2')}
            >
              VideoAlbum-2
            </button>
          </div>

          {/* ---------- image / video section part ------------ */}

          <div className='w-full py-4 '>
            {activeAlbum === 'PhotoAlbum' && (
              <PhotoAlbum data={photoalbum} cardIndex={1} />
            )}
            {activeAlbum === 'VideoAlbum' && (
              <VideoAlbum data={videoalbum} cardIndex={2} />
            )}
            {activeAlbum === 'MediaAlbum' && (
              <MediaAlbum data={mediaalbum} cardIndex={3} />
            )}
            {activeAlbum === 'PhotoAlbum2' && (
              <PhotoAlbum2 data={photoalbum} cardIndex={3} />
            )}
            {activeAlbum === 'VideoAlbum2' && (
              <VideoAlbum data={videoalbum} cardIndex={3} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
