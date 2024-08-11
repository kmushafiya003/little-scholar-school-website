import React from 'react'
// const MyComponent = React.lazy(() => import('./MyComponent'));
import Counts from './home/Counts'
import Faculty from './home/faculty'
import HeroSection from './home/HeroSection'
import Infrastructure from './home/infrastructure'
import Message from './home/Message'
import Welcome from './home/Welcome'
// import { Suspense } from 'react';

// const Counts = React.lazy(()=> import('./home/Counts'));
// const Faculty = React.lazy(()=> import('./home/faculty'));
// const Infrastructure = React.lazy(()=> import('./home/infrastructure'));
// const HeroSection = React.lazy(()=> import('./home/HeroSection'));
// const MyMessage = React.lazy(()=> import('./home/Message'));
// const Welcome = React.lazy(()=> import('./home/Welcome'));

const Try = () => {
  return (
   <div>
        <Counts/>
        <Faculty/>
        <Infrastructure/>
        <HeroSection/>
        <Message/>
        <Welcome/>
        </div>
  
  )
}

export default Try