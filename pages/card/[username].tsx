import { Card, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";

export default function UserCard() {
  const router = useRouter();

  const { username } = router.query;

  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Card>
        <CardContent style={{ backgroundColor: "white" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Bizniz
          </Typography>
          <Typography variant="h5" component="div">
            {username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            This is my business card
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
