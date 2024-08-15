import React from 'react'
import Dynamic3dButton from '../../common/Dynamic3dButton'

function Topper () {
  return (
    <section className='relative w-full'>
      <div className='grid w-10/12 grid-cols-1 gap-2 pt-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <Dynamic3dButton
          text1=''
          text2='2023-24'
          className='scale-card'
          hasLink={true}
          link='/'
          showIcon={false}
        />
        <Dynamic3dButton
          text1=''
          text2='2022-23'
          className='scale-card'
          hasLink={true}
          link='/'
          showIcon={false}
        />
        <Dynamic3dButton
          text1=''
          text2='2021-22'
          className='scale-card'
          hasLink={true}
          link='/'
          showIcon={false}
        />
        <Dynamic3dButton
          text1=''
          text2='2020-21'
          className='scale-card'
          hasLink={true}
          link='/'
          showIcon={false}
        />
        <Dynamic3dButton
          text1=''
          text2='2019-20'
          className='scale-card'
          hasLink={true}
          link='/'
          showIcon={false}
        />
        <Dynamic3dButton
          text1=''
          text2='2018-19'
          className='scale-card'
          hasLink={true}
          link='/'
          showIcon={false}
        />
        <Dynamic3dButton
          text1=''
          text2='2017-18'
          className='scale-card'
          hasLink={true}
          link='/'
          showIcon={false}
        />
      </div>
    </section>
  )
}

export default Topper
