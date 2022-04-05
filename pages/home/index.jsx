import React, { useEffect } from "react";
import CRUDrooms from "../../components/Crud/crudRooms";
import Room from "../../components/room/Room";
import axios from "axios";
import CRUDmeetings from "../../components/Crud/crudMeetings";

const Main = () => {
  // USE STATES
  const [rooms, setRooms] = React.useState([]);
  const [fetch, setFetch] = React.useState(0);
  const [date, setDate] = React.useState();
  // USE EFFECTS
  useEffect(() => {
    axios.get("http://localhost:3000/api/roomss").then((allRooms) => {
      setRooms(allRooms.data);
    });
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    today = yyyy + "-" + mm + "-" + dd;
    setDate(today);

    // console.log(rooms);
  }, [fetch]);
  // console.log(date);
  // UPDATE
  const updateRooms = () => {
    setFetch(!fetch);
  };

  return (
    <>
      <h1 className="text-center text-lg pt-5 font-bold">Scheduler</h1>
      <div className="grid m-auto justify-center align-middle text-center">
        <label htmlFor="">Select Date</label>
        <input
          type="date"
          className="bg-slate-300"
          onChange={(e) => {
            setDate(e.target.value);
            // console.log(date);
          }}
        />
      </div>

      {/* TYPE */}
      <div className="p-5">
        <div className="grid grid-cols-4 text-center font-semibold">
          <div className="grid  border-slate-900 border-2 align-center justify-center p-1 ">
            <p className="align-center justify-center">Rooms</p>
          </div>
          <div className="col-span-3 border-slate-900 border-2 p-1 align-center justify-center">
            Time
          </div>
        </div>
        {/* SUB-TYPE */}
        <div className="grid grid-cols-4 text-center font-semibold">
          <div className="grid grid-cols-3 border-slate-900 border-2 align-center justify-center  ">
            <p className="align-center justify-center">Room Name</p>
            <p className="align-center justify-center border-l-slate-900 border-l-2">
              Room Type
            </p>
            <p className="align-center justify-center border-l-slate-900 border-l-2">
              Capacity
            </p>
          </div>
          <div
            className="col-span-3 border-slate-900 border-2   grid align-center justify-center
          grid-cols-13 w-full "
          >
            <div className="">8 AM</div>
            <div className="border-l-slate-900 border-l-2">9 AM</div>
            <div className="border-l-slate-900 border-l-2">10 AM</div>
            <div className="border-l-slate-900 border-l-2">11 AM</div>
            <div className="border-l-slate-900 border-l-2">12 PM</div>
            <div className="border-l-slate-900 border-l-2">1 PM</div>
            <div className="border-l-slate-900 border-l-2">2 PM</div>
            <div className="border-l-slate-900 border-l-2">3 PM</div>
            <div className="border-l-slate-900 border-l-2">4 PM</div>
            <div className="border-l-slate-900 border-l-2">5 PM</div>
            <div className="border-l-slate-900 border-l-2">6 PM</div>
            <div className="border-l-slate-900 border-l-2">7 PM</div>
            <div className="border-l-slate-900 border-l-2">8 PM</div>
          </div>
        </div>
        {/* TABLE */}
        {rooms.map((data) => (
          <Room
            roomid={data._id}
            roomname={data.text}
            roomtype={data.type}
            roomcapacity={data.capacity}
            background={data.color}
            dateSelected={date}
            key={data._id}
            updateRooms={updateRooms}
          />
        ))}
      </div>
      <div>
        <CRUDrooms updateRooms={updateRooms} />
        <CRUDmeetings updateRooms={updateRooms} />
      </div>
    </>
  );
};

export default Main;
