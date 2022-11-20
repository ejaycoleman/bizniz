import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "@mui/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
