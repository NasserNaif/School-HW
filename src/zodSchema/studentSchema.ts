import { z } from "zod";

export const studentSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "name is required !" })
      .min(3, "name must be more than 2"),
    age: z
      .number({ required_error: "age is required !" })
      .min(18, "age must be more than 17 year !"),
    major: z.string({ required_error: "major is required !" }),
  }),
});

export const ParamsSchema = z.object({
  params: z.object({
    params: z.string(),
  }),
});

export type ParamsType = z.infer<typeof ParamsSchema>["params"];

export const teacherSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "name is required !" })
      .min(3, "name must be more than 2"),
  }),
});

export const classroomSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "name is required !" })
      .min(3, "name must be more than 2"),
    studentID: z
      .string({ required_error: "name is required !" })
      .min(3, "name must be more than 2"),
    teacherID: z
      .string({ required_error: "name is required !" })
      .min(3, "name must be more than 2"),
  }),
});
