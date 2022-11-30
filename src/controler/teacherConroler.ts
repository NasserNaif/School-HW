import { Teacher } from "@prisma/client";
import { Request, Response } from "express";
import { localPrisma } from "../config/DB";
import { ParamsType } from "../zodSchema/studentSchema";

export const getTeachers = async (req: Request, res: Response) => {
  try {
    const getTeachers = await localPrisma.teacher.findMany();

    return res.status(200).json(getTeachers);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

export const addTeacher = async (req: Request, res: Response) => {
  try {
    const newTeacher = req.body as Teacher;
    await localPrisma.teacher.create({ data: newTeacher });

    return res.status(200).json({
      message: "teacher added !!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  try {
    const { params } = req.params as ParamsType;

    const teaccher = await localPrisma.teacher.findFirst({
      where: { id: params },
    });

    if (!teaccher) {
      return res.status(400).json({
        message: "user not found !",
      });
    }

    return res.status(200).json(teaccher);

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};
