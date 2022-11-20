import {
  Alert,
  Button,
  Card,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: () => {
      return fetch("/api/card", {
        method: "POST",
        body: JSON.stringify({ name, description, email }),
      });
    },
  });

  return (
    <Card
      style={{ display: "flex", flexDirection: "column", padding: 40, gap: 15 }}
    >
      {isError && <Alert severity="error">Something went wrong...</Alert>}
      <Typography variant="h3">Submit Business Card</Typography>
      <TextField
        label="Name"
        variant="standard"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextField
        label="Description"
        variant="standard"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <TextField
        label="Email"
        variant="standard"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Button onClick={() => mutate()} variant="contained" color="secondary">
          Submit
        </Button>
      )}
    </Card>
  );
}
