import { Button, SecondaryHeading,Span } from "../../styledCss";
import "../EventDisplay/EventContainer.css";
import {useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewEvent,deleteEvent } from "../Helper/eventSlice";

const EventContainer=(props)=>{
    const {id,image,name}=props.item;
    const {onEditEvent}=props;
    const history=useHistory();
    const dispatch=useDispatch();

    const isAdmin=useSelector((state)=>state.auth.currentUser);

    const onItemClick=(id)=>{
        dispatch(viewEvent(id));
        history.push(`/ViewEvent/${id}`);
    }

    const onDeleteEvent=(id)=>{
        dispatch(deleteEvent(id));
    }
    const onEventEdit=(id)=>{
        onEditEvent(id);
        history.push("/Admin");
    }

    return(
        <div className="event_container">
            <div className="event_container-img_container">
            <img onClick={() => onItemClick(id)} className="event_container-img" src={image} />
            </div>
            <div className="event_container-content">
                <SecondaryHeading>Name: <Span>{name}</Span></SecondaryHeading>
                {isAdmin=="admin" && <div className="event_container-button">
                    <Button onClick={()=>onEventEdit(id)} style={{fontSize:".7rem",padding:".5rem", width:"5rem",marginTop:"0"}}>Edit</Button>
                    <Button onClick={()=>onDeleteEvent(id)} style={{fontSize:".7rem",padding:".5rem", width:"5rem",marginTop:"0"}}>Delete</Button>
                </div>}
            </div>
    </div>
    )
}

export default EventContainer;