import React, { useEffect, useState } from "react";
import axios from "axios";

const Room = ({
  roomid,
  roomname,
  roomtype,
  roomcapacity,
  background,
  dateSelected,
  updateRooms,
}) => {
  // USE STATES
  const [meetings, setMeetings] = React.useState([]);

  // PROPS
  const roomId = roomid;
  const roomName = roomname;
  const roomType = roomtype;
  const roomCapacity = roomcapacity;
  const bg = background;

  // USE EFFECT

  /////GET MEETINGS DATA
  React.useEffect(() => {
    axios.get("http://localhost:3000/api/meetings").then((allMeetings) => {
      setMeetings(allMeetings.data);
    });
  }, [updateRooms]);

  // find distance ,add percent according to distance,left right posiion = start time  7.69
  return (
    <div className="grid grid-cols-4 text-center ">
      <div className="grid grid-cols-3 border-slate-900 border-2 align-center justify-center  ">
        <p className="align-center justify-center">{roomName}</p>
        <p className="align-center justify-center border-l-slate-900 border-l-2">
          {roomType}
        </p>
        <p className="align-center justify-center border-l-slate-900 border-l-2">
          {roomCapacity}
        </p>
      </div>

      <div
        className="col-span-3 border-slate-900 border-2  align-center justify-center grid 
          grid-cols-13 w-full  relative"
      >
        {meetings.map((data) =>
          roomId == data.RoomId && dateSelected == data.date ? (
            <div
              style={{
                position: "absolute",
                width: `${
                  7.7 * (data.EndTime - data.StartTime).toString() + "%"
                }`,
                left: `${7.7 * (data.StartTime - 8).toString() + "%"}`,
                background: `${bg}`,
                height: "100%",
                zIndex: "-1",
              }}
              key={data._id}
            ></div>
          ) : (
            ""
          )
        )}

        <div className=""></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
        <div className="border-l-slate-900 border-l-2"></div>
      </div>
    </div>
  );
};

export default Room;
