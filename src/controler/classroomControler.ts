import { ClassRoom, Teacher } from "@prisma/client";
import { Request, Response } from "express";
import { localPrisma } from "../config/DB";
import { ParamsType } from "../zodSchema/studentSchema";

// get all classrooms
export const getClassRoom = async (req: Request, res: Response) => {
  try {
    const classRooms = await localPrisma.classRoom.findMany();

    return res.status(200).json(classRooms);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

// add new Classroom
export const addClassRoom = async (req: Request, res: Response) => {
  try {
    const newClassRoom = req.body as ClassRoom;
    await localPrisma.classRoom.create({ data: newClassRoom });

    return res.status(201).json({
      message: "ClassRoom added !",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

// find classroom
export const getClassroomById = async (req: Request, res: Response) => {
  try {
    const { params } = req.params as ParamsType;

    const student = await localPrisma.student.findFirst({
      where: { id: params },
    });

    if (!student) {
      return res.status(400).json({
        message: "user not found !",
      });
    }

    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error !",
    });
  }
};
