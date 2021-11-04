import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'some_email@email.com',
      name: 'Some Name'

    }
  })
  console.log(user)
}

