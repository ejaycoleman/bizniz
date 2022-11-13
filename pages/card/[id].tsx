import { BusinessCard as BusinessCardType, PrismaClient } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";
import BusinessCard from "../../Components/BusinessCard";

const prisma = new PrismaClient();

export default function UserCard({
  bizCard,
}: {
  bizCard: BusinessCardType | null;
}) {
  if (!bizCard) {
    return <BusinessCard name="404" description="Cannot load this user" />;
  }

  return (
    <BusinessCard
      name={bizCard.name}
      description={bizCard.description}
      email={bizCard.email}
    />
  );
}

export async function getServerSideProps({
  params,
}: {
  params: ParsedUrlQuery;
}) {
  try {
    if (typeof params?.id !== "string") return;

    const id = parseInt(params.id);

    const bizCard = await prisma.businessCard.findUnique({
      where: { id },
    });

    return { props: { bizCard } };
  } catch (e) {
    console.log(e);
  }

  return { props: {} };
}
