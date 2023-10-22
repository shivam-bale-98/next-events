import React from 'react';
import EventItem from './event-item';
import classes from './even-list.module.css';

function EvenList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
       {items.map(event => 
        <EventItem 
          key={event.id}
          id={event.id} 
          title={event.title}
          image={event.image}
          date={event.date}
          description={event.description}
          location={event.location}/>
       )}
    </ul>
  )
}

export default EvenList
