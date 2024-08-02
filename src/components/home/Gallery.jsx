import React, { useState } from 'react'
import VideoAlbum from '../common/VideoAlbum'
import PhotoAlbum from '../common/PhotoAlbum'
import MediaAlbum from '../common/MediaAlbum'
import { photoalbum, videoalbum, mediaalbum } from '../../data/albums-data'

function Gallery () {
  const [activeAlbum, setActiveAlbum] = useState('PhotoAlbum')

  const getButtonClass = albumType => {
    return activeAlbum === albumType
      ? 'bg-dark-blue text-white'
      : 'bg-white text-black'
  }

  return (
    <section className='relative w-full'>
      <div className='w-11/12 mx-auto'>
        <div className='flex-col xxl:pr-1 xxl:pl-10 xl:pl-10 xmd:flex-col xl:flex-row rounded-3xl xmd:items-center xl:items-start dxs:flex-col dxs:items-center dxs:pl-0 dxs:pr-0 '>
          <div className='flex items-center text-white mdxs:pt-8 space-normal dxs:pt-8 mdxs:flex-row dxs:flex-col mdxs:pl-[4rem] '>
            <button
              className={`flex text-lg w-48  rounded-sm  h-14  items-center justify-center ${getButtonClass(
                'PhotoAlbum'
              )}`}
              onClick={() => setActiveAlbum('PhotoAlbum')}
            >
              PhotoAlbum
            </button>
            <button
              className={`flex text-lg w-48  rounded-sm  h-14 items-center justify-center ${getButtonClass(
                'VideoAlbum'
              )}`}
              onClick={() => setActiveAlbum('VideoAlbum')}
            >
              VideoAlbum
            </button>
            <button
              className={`flex text-lg w-48  rounded-sm h-14 items-center justify-center ${getButtonClass(
                'MediaAlbum'
              )}`}
              onClick={() => setActiveAlbum('MediaAlbum')}
            >
              MediaAlbum
            </button>
          </div>
          <div className='w-full p-4'>
            {activeAlbum === 'PhotoAlbum' && (
              <PhotoAlbum data={photoalbum} cardIndex={1} />
            )}
            {activeAlbum === 'VideoAlbum' && (
              <VideoAlbum data={videoalbum} cardIndex={2} />
            )}
            {activeAlbum === 'MediaAlbum' && (
              <MediaAlbum data={mediaalbum} cardIndex={3} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
