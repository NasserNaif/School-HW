import { PrismaClient } from "@prisma/client";

const localPrisma = new PrismaClient({
  log: ["query"],
  errorFormat: "pretty",
});

const connectDB = () => {
  try {
    localPrisma.$connect();
    console.log("database connnected !");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export { connectDB, localPrisma };
