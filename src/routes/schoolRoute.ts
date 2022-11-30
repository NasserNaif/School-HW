import express from "express";
import {
  addClassRoom,
  getClassRoom,
  getClassroomById,
} from "../controler/classroomControler";
import {
  addStudent,
  getStudentById,
  getStudents,
} from "../controler/studentControler";
import {
  addTeacher,
  getTeacherById,
  getTeachers,
} from "../controler/teacherConroler";
import validate from "../middleware/validate";
import {
  classroomSchema,
  ParamsSchema,
  studentSchema,
  teacherSchema,
} from "../zodSchema/studentSchema";

const router = express.Router();

// student Routes
router.get(`/student`, getStudents);
router.get(`/student/:id`, validate(ParamsSchema), getStudentById);
router.post(`/student`, validate(studentSchema), addStudent);

// teaccher Routes
router.get(`/teacher`, getTeachers);
router.get(`/teacher/:id`, validate(ParamsSchema), getTeacherById);
router.post(`/teacher`, validate(teacherSchema), addTeacher);

// classroom Routes
router.get(`/classroom`, getClassRoom);
router.get(`classroom/:id`, validate(ParamsSchema), getClassroomById);
router.post(`/classroom`, validate(classroomSchema), addClassRoom);

export default router;
