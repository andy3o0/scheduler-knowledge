import React, { useEffect } from "react";
import axios from "axios";

const CRUDmeetings = ({ updateRooms }) => {
  //STATES
  const [selected, setSelected] = React.useState("");
  const [fetch, setFetch] = React.useState(0);
  const [meetings, setMeetings] = React.useState([]);
  const [show, setShow] = React.useState(0);
  const [rooms, setRooms] = React.useState([]);
  const [validated, setValidated] = React.useState(0);
  const [createMeeting, setCreateMeeting] = React.useState({
    StartTime: "",
    Description: "",
    Subject: "",
    RoomId: "",
    EndTime: "",
    date: "",
  });
  const [date, setDate] = React.useState("");
  //ISO TO LOCAL
  const startTime = new Date(createMeeting.StartTime);
  const greaterDate =
    startTime.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0);
  //VALIDATOR
  React.useEffect(() => {
    if (
      createMeeting.Description &&
      createMeeting.RoomId &&
      createMeeting.Subject &&
      createMeeting.date &&
      parseInt(createMeeting.EndTime) > parseInt(createMeeting.StartTime)
    ) {
      setValidated(true);
      // console.log(createMeeting);
    } else {
      setValidated(0);
      // console.log(createMeeting);
    }
  }, [createMeeting, date]);
  ///DELETE Meeting DATA
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:3000/api/meetings/${id}`);
    updateRooms();
    update();
    // window.location.reload(false);
  };
  /////GET MEETINGS DATA
  React.useEffect(() => {
    axios.get("http://localhost:3000/api/meetings").then((allMeetings) => {
      setMeetings(allMeetings.data);
    });
  }, [fetch]);
  //GET ROOM DATA
  React.useEffect(() => {
    axios.get("http://localhost:3000/api/roomss").then((allRooms) => {
      setRooms(allRooms.data);
    });
    // console.log(rooms);
  }, []);
  //CREATE Meeting DATA
  const createStudent = () => {
    axios.post("http://localhost:3000/api/meetings", createMeeting);
    updateRooms();
    update();
    // window.location.reload(false);
  };

  // UPDATE DATA
  const update = async () => {
    setCreateMeeting({
      StartTime: "",
      Description: "",
      Subject: "",
      RoomId: "",
      EndTime: "",
      date: "",
    });
    setFetch(!fetch);
  };
  //FILTER MEETINGS
  // let filteredMeetings = meetings?.filter((data) => {
  //   const startTimeISOString = data.StartTime;
  //   const startTime = new Date(startTimeISOString);
  //   const condition =
  //     startTime.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0);
  //   // console.log(condition);
  //   return condition;
  // });
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          background: "lightgrey",
        }}
      >
        <h2 className="text-xl text-center">Meetings</h2>
        <select
          name="Meetings"
          id="1"
          style={{ width: "100%" }}
          onClick={(e) => {
            setSelected(e.target.value);
          }}
        >
          {meetings?.map((data) => (
            <option value={data._id} key={data._id} style={{ width: "100%" }}>
              {data.Subject}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            deleteStudent(selected);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Add
        </button>
        <div
          style={{
            display: `${show ? "grid" : "none"}`,
            justifyContent: "center",
          }}
        >
          <label>Subject</label>
          <input
            type="text"
            value={createMeeting.Subject}
            onChange={(event) => {
              setCreateMeeting({
                ...createMeeting,
                Subject: event.target.value,
              });
            }}
          />
          <label>Description</label>
          <input
            type="text"
            value={createMeeting.Description}
            onChange={(event) => {
              setCreateMeeting({
                ...createMeeting,
                Description: event.target.value,
              });
            }}
          />

          <label htmlFor="">Select Date</label>
          <input
            type="date"
            onChange={(e) => {
              setCreateMeeting({
                ...createMeeting,
                date: e.target.value,
              });
            }}
          />
          <label htmlFor="">Start Time</label>
          <select
            name="Start Time"
            id=""
            onClick={(e) => {
              // setStartSelected(e.target.value);

              setCreateMeeting({
                ...createMeeting,
                StartTime: e.target.value,
              });
            }}
          >
            <option value="8">8:00 AM</option>
            <option value="9">9:00 AM</option>
            <option value="10">10:00 AM</option>
            <option value="11">11:00 AM</option>
            <option value="12">12:00 PM</option>
            <option value="13">1:00 PM</option>
            <option value="14">2:00 PM</option>
            <option value="15">3:00 PM</option>
            <option value="16">4:00 PM</option>
            <option value="17">5:00 PM</option>
            <option value="18">6:00 PM</option>
            <option value="19">7:00 PM</option>
          </select>
          <label htmlFor="">End Time</label>
          <select
            name="End Time"
            id=""
            onClick={(e) => {
              // setEndSelected(e.target.value);

              setCreateMeeting({
                ...createMeeting,
                EndTime: e.target.value,
              });
            }}
          >
            <option value="9">9:00 AM</option>
            <option value="10">10:00 AM</option>
            <option value="11">11:00 AM</option>
            <option value="12">12:00 PM</option>
            <option value="13">1:00 PM</option>
            <option value="14">2:00 PM</option>
            <option value="15">3:00 PM</option>
            <option value="16">4:00 PM</option>
            <option value="17">5:00 PM</option>
            <option value="18">6:00 PM</option>
            <option value="19">7:00 PM</option>
            <option value="20">8:00 PM</option>
          </select>
          <label htmlFor="">Select Room</label>
          <select
            name="Rooms"
            id="1"
            style={{ width: "100%" }}
            onClick={(e) => {
              setCreateMeeting({
                ...createMeeting,
                RoomId: e.target.value,
              });
              // console.log(createMeeting);
            }}
          >
            {rooms?.map((data) => (
              <option value={data._id} key={data._id} style={{ width: "100%" }}>
                {data.text}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              if (validated) {
                createStudent();
              }
            }}
          >
            {validated ? "Create Meeting" : "Data is invalid or incomplete"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CRUDmeetings;
