import { BusinessCard, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BusinessCard>
) {
  const { name, description, email } = req.body;

  if (req.method === "POST") {
    try {
      const bizCard = await prisma.businessCard.create({
        data: { name, description, email },
      });

      res.status(200).json(bizCard);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  res.status(404);
}
