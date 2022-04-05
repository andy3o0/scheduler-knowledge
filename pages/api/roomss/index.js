import dbConnect from "../../../utils/dbConnect";
import roomsModel from "../../../models/roomsModel";

dbConnect();
export default async (request, response) => {
  const { method } = request;
  //   REQUEST TYPE
  switch (method) {
    case "GET":
      try {
        const allroomss = await roomsModel.find();
        response.status(200).json(allroomss);
      } catch (error) {
        response.status(404).json({ message: error.message });
      }
      break;

    case "POST":
      try {
        const rooms = request.body;
        const newrooms = new roomsModel(rooms);
        await newrooms.save();
        response.status(201).json(newrooms);
      } catch (error) {
        response.status(409).json({ message: error.message });
      }
      break;
  }
};
