import { Container, Button, Select, Label } from "../../styledCss";
import TextInput from "../Helper/InputField";
import { useDispatch ,useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import { addEvent,editEvent } from "../Helper/eventSlice";
import { useState } from "react";

const AddminMovieForm = ({eventId}) => {
  const [idInput,setIdInput] = useState("");
  const [imageInput,setImageInput]=useState("");
  const [nameInput,setNameInput]=useState("");
  const [typeInput,setTypeInput]=useState("");
  const [priceInput,setPriceInput]=useState("");
  const [venueInput,setVenueInput]=useState("");
  const [dateInput,setDateInput]=useState("");
  const [timeInput,setTimeInput]=useState("");

  const history=useHistory();
  const dispatch=useDispatch();

  const events=useSelector((state)=>state.event.events);

  const idHandler=(event)=>setIdInput(event.target.value);
  const imageHandler=(event)=>setImageInput(event.target.value);
  const nameHandler=(event)=>setNameInput(event.target.value);
  const typeHandler=(event)=>setTypeInput(event.target.value);
  const priceHandler=(event)=>setPriceInput(event.target.value);
  const venueHandler=(event)=>setVenueInput(event.target.value);
  const dateHandler=(event)=>setDateInput(event.target.value);
  const timeHandler=(event)=>setTimeInput(event.target.value);

  if(eventId!=null){
    let obj=events.find((obj)=>eventId === obj.id);
    console.log(obj);
    idHandler(obj.id);
    imageHandler(obj.image);
    nameHandler(obj.name);
    typeHandler(obj.type);
    priceHandler(obj.price);
    venueHandler(obj.venue);
    dateHandler(obj.date);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let obj={
      id:idInput,
      image:imageInput,
      name:nameInput,
      type:typeInput,
      price:priceInput,
      venue:venueInput,
      date:dateInput,
      time:timeInput,
    }
    if(eventId!=null)
      dispatch(editEvent(obj));
    else 
      dispatch(addEvent(obj));
    history.push("/Events");
  };

  return (
    <Container style={{ marginBottom: "2rem" }}>
      <form onSubmit={formSubmitHandler}>
        <TextInput
          type="text"
          label="Event Id "
          value={idInput}
          onChange={idHandler}
          id="id"
          htmlFor="id"
          required
        ></TextInput>

        <TextInput
          type="text"
          label="Image "
          value={imageInput}
          onChange={imageHandler}
          id="image"
          htmlFor="image"
          required
        ></TextInput>

        <TextInput
          type="text"
          label="Event name "
          value={nameInput}
          onChange={nameHandler}
          id="eventname"
          htmlFor="eventname"
          required
        ></TextInput>

        <div>
          <Label htmlFor="eventtype">Event type</Label>
          <Select value={typeInput} onChange={typeHandler} style={{ marginBottom: "1rem" }}>
            <option value="movie">Movie</option>
            <option value="concetr">Concert</option>
            <option value="sport">Sport</option>
            <option value="marrige">Marrige</option>
          </Select>
        </div>

        <TextInput
          type="number"
          label="Ticket price "
          value={priceInput}
          onChange={priceHandler}
          id="price"
          htmlFor="price"
          required
        ></TextInput>

        <TextInput
          type="text"
          label="Venue "
          value={venueInput}
          onChange={venueHandler}
          id="venue"
          htmlFor="venue"
          required
        ></TextInput>

        <TextInput
          type="text"
          label="Date "
          id="date"
          value={dateInput}
          onChange={dateHandler}
          htmlFor="date"
          required
        ></TextInput>

        <TextInput
          type="text"
          label="Time "
          value={timeInput}
          onChange={timeHandler}
          id="time"
          htmlFor="time"
          required
        ></TextInput>

        <Button>Add Event</Button>
      </form>
    </Container>
  );
};

export default AddminMovieForm;
