import Link from 'next/link'
import React from 'react';
import classes from './event-item.module.css';
import Button from '../ui/button';

function EventItem(props) {

  const { title, image, date, description, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    // year: 'numeric' 
  });

  const splitDate = humanReadableDate.split(' ');
  const month = splitDate[0];
  const day  = splitDate[1];


  const formattedAddress = location.replace(',', '\n');

  const exploreLink = `/events/${id}`;

  //desc
  const words = description.split(' ');
  const first10words = words.slice(0, 14);
  const shortDesc = first10words.join(' ') + '...';


  return (
    <li className={classes.card_small}>
      <div className={classes.img_wrap}>
        <img src={'/' + image} alt={title} />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>
          <time>
            <span className={classes.month}>
              {month}
            </span>
            <span className={classes.day}>
              {day}
            </span>
          </time>
        </div>
        <div className={classes.address}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={classes.link}>
            <Button link={exploreLink}>Explore Event</Button>
          </div>
        </div>

      </div>

    </li>
  )
}

export default EventItem
