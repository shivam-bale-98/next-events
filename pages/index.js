import React from 'react';
import { getFeaturedEvents } from '../dummy-data';
import EvenList from '../components/events/even-list';



function HomePage() {

  const featuredEvents = getFeaturedEvents();


  return (
    <div>
       <EvenList items={featuredEvents}/>
    </div>
  )
}

export default HomePage
