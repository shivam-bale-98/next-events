import React from 'react';
import classes from './event-logistics.module.css';
import LogisticItem from './logistic-item';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';


function EventLogistics(props) {

  const { date, address, image, imageAlt } =  props; 
  
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const addressText = address.replace(',', '\n'); 
  return (
    <section className={classes.logistics}>
       <div className={classes.image}> 
          <img src={`/${image}`} alt={imageAlt}/>
       </div>
       <ul className={classes.list}>
          <LogisticItem icon={DateIcon}>
             <time>{humanReadableDate}</time>
          </LogisticItem>
          <LogisticItem icon={AddressIcon}>
             <address>{addressText}</address>
          </LogisticItem>
       </ul>
    </section>
  )
}

export default EventLogistics;