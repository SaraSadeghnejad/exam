import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ChemistryBoard() {
  return (
    <Card sx={{ width:150 , margin:.5 ,padding:.2 ,height:200}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5"  component="div">
              بسته زیست شناسی
          </Typography>
          <Typography variant="body5" color="text.secondary">
           فصل اول: جهان هستی

          </Typography>
          <Typography variant="body2" color="text.secondary">
           درس: چهارم
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
