import dbConnect from "../../../utils/dbConnect";
import roomsModel from "../../../models/roomsModel";

dbConnect();
export default async (request, response) => {
  const { method } = request;
  //   REQUEST TYPE
  switch (method) {
    case "DELETE":
      try {
        const id = request.query.id;
        await roomsModel.findByIdAndRemove(id).exec();
        response.send("Successfully Deleted");
      } catch (error) {
        console.log(error);
      }
      break;

    case "PATCH":
      try {
        const id = request.query.id;
        const rooms = request.body;
        await roomsModel.findByIdAndUpdate(id, rooms).exec();
        response.send("Successfully Updated");
      } catch (error) {
        console.log(error);
      }
      break;
  }
};
