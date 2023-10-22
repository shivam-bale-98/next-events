import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventLogistics from "../../components/events-detail/event-logistics";
import EventSummary from '../../components/events-detail/event-summary';
import EventContent from "../../components/events-detail/event-content";


function EventDetailPage() {

    const router = useRouter();

    const eventId = router.query.eventId;

    console.log(router);
    console.log(eventId);

    const event = getEventById(eventId);

    console.log(event);

    if (!event) {
        return <p>No event found</p>
    }

    return (
    <Fragment >
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
    );
}
export default EventDetailPage; 