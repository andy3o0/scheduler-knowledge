import dbConnect from "../../../utils/dbConnect";
import meetingModel from "../../../models/meetingModel";
dbConnect();
export default async (request, response) => {
  const { method } = request;
  switch (method) {
    case "GET":
      try {
        const allStudents = await meetingModel.find();
        response.status(200).json(allStudents);
      } catch (error) {
        response.status(404).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const student = request.body;
        const newStudent = new meetingModel(student);
        await newStudent.save();
        response.status(201).json(newStudent);
      } catch (error) {
        response.status(409).json({ message: error.message });
      }
      break;
  }
};
