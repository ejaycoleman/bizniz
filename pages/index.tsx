import { Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bizniz</title>
        <meta name="description" content="Bizniz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h3">Welcome to Bizniz!</Typography>
    </div>
  );
}
