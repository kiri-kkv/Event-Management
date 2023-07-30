import {useSelector} from "react-redux";
import EventContainer from "./EventContainer";
import { CardContainer ,DisplayMsg, Button} from "../../styledCss";
import { useHistory } from "react-router-dom";

const EventDisplay=({onEditEvent})=>{
    
    const events=useSelector((state)=>state.event.events);
    const user=useSelector((state)=>state.auth.currentUser);
    
    const history=useHistory();
    const addEventClick=()=>history.push("/Admin")

    return (
      <>
        {events.length===0 && user!=="admin" && <DisplayMsg>No Event For Today</DisplayMsg>}
        {events.length!==0 && <CardContainer>
        {events.map((item) => (
        <EventContainer
          key={item.id}
          item={{
            id: item.id,
            image:item.image,
            name:item.name,
            type:item.type,
            price:item.price,
            venue:item.venue,
            date:item.date,
            time:item.time,
          }}
          onEditEvent={onEditEvent}
        />
      ))}
      </CardContainer>}
      {user==="admin" && <div style={{display:"flex",justifyContent:"center"}}>
       <Button onClick={addEventClick} style={{marginBottom:"2rem", backgroundColor:"yellow"}}>Add Event</Button>
      </div>}
      </>
    )
}

export default EventDisplay;