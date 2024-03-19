import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";


const resetCountIfExpired = async (userId: string) => {
  
  // Ensure MILLIS_PER_DAY is defined, representing the number of milliseconds in a day
  const MILLIS_PER_DAY = 60 * 60 * 1000;

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (userApiLimit && userApiLimit.count >= 1) { // Check if count is greater than or equal to 1
    const lastUpdatedTime = userApiLimit.updatedAt.getTime();
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastUpdatedTime;

    if (timeDifference >= MILLIS_PER_DAY) {
      await prismadb.userApiLimit.update({
        where: { userId },
        data: { count: 0, updatedAt: new Date() }, // Reset count and update the updatedAt field
      });
    }
  }
};


export const incrementApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  await resetCountIfExpired(userId);

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
