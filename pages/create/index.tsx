import { Button, Card, TextField, Typography } from "@mui/material";

export default function Create() {
  return (
    <Card
      style={{ display: "flex", flexDirection: "column", padding: 40, gap: 15 }}
    >
      <Typography variant="h3">Submit Business Card</Typography>
      <TextField label="Name" variant="standard" />
      <TextField label="Description" variant="standard" />
      <TextField label="Email" variant="standard" />
      <Button onClick={() => null} variant="contained" color="secondary">
        Submit
      </Button>
    </Card>
  );
}
