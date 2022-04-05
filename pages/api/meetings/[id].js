import dbConnect from "../../../utils/dbConnect";
import meetingModel from "../../../models/meetingModel";
dbConnect();
export default async (request, response) => {
  const { method } = request;
  switch (method) {
    case "DELETE":
      try {
        const id = request.query.id;
        await meetingModel.findByIdAndRemove(id).exec();
        response.send("Successfully Deleted");
      } catch (error) {
        console.log(error);
      }
      break;
    case "PATCH":
      try {
        const id = request.query.id;
        const student = request.body;
        await meetingModel.findByIdAndUpdate(id, student).exec();
        response.send("Successfully Updated");
      } catch (error) {
        console.log(error);
      }
      break;
  }
};
