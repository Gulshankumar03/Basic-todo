import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const task = await prisma.todo.create({
      data: req.body,
    });
    res.json(task);
  }
}
