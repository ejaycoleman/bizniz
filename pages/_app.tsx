import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "@mui/system";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Component {...pageProps} />
    </Container>
  );
}
