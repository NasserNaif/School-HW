import { Student } from "@prisma/client";
import { Request, Response } from "express";
import { localPrisma } from "../config/DB";
import { ParamsType } from "../zodSchema/studentSchema";

// get all student
export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await localPrisma.student.findMany();

    return res.status(200).json(students);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

// add new student
export const addStudent = async (req: Request, res: Response) => {
  try {
    const newStudent = req.body as Student;
    await localPrisma.student.create({ data: newStudent });

    return res.status(201).json({
      message: "Student added !",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

// find student
export const getStudentById = async (req: Request, res: Response) => {
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
