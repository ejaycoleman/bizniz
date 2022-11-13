import { Card, CardContent, Typography } from "@mui/material";

const BusinessCard = ({
  name,
  description,
  email,
}: {
  name: string;
  description: string;
  email?: string;
}) => {
  return (
    <Card style={{ width: "50%" }}>
      <CardContent style={{ backgroundColor: "white" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Bizniz
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        {email && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            email: {email}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
