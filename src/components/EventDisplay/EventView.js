import {useSelector} from "react-redux";
import "../EventDisplay/EventView.css";
import { SecondaryHeading,Span } from "../../styledCss";
import { Button } from "../../styledCss";
import {useHistory} from "react-router-dom";

const EventView=()=>{
    const event=useSelector((state)=>state.event.view);
    const history=useHistory();

    const eventPage=()=>{
        history.push("/Events");
    }

    return (
        <div className='event_view'>
            <img src={event.image} className="event_view-image"/> 
            <div className="event_view-content"> 
            <SecondaryHeading>Event Name: <Span>{event.name}</Span></SecondaryHeading>
            <SecondaryHeading>Event Type: <Span>{event.type}</Span></SecondaryHeading>
            <SecondaryHeading>Event Price: <Span>{event.price}</Span></SecondaryHeading>
            <SecondaryHeading>Event Venue: <Span>{event.venue}</Span></SecondaryHeading>
            <SecondaryHeading>Event Date: <Span>{event.date}</Span></SecondaryHeading>
            <SecondaryHeading>Event Time: <Span>{event.time}</Span></SecondaryHeading>
            <Button onClick={eventPage}>Events</Button>
            </div>
        </div> 
    )
}

export default EventView;

