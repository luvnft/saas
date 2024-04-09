import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const PrismaClientSingleton = () =>{

return new PrismaClient().$extends(withAccelerate());
}
type PrismaClientSingleton = ReturnType<typeof PrismaClientSingleton>;
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};
const db = globalForPrisma.prisma ??  PrismaClientSingleton();



export default db;