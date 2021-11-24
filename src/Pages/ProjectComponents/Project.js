import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Github, Link } from '../../Icons';

export default function Project({
  image,
  title,
  description,
  github,
  deployed,
  lastOne,
}) {
  const cardStyles = {
    flex: '0 1 85%',
    maxWidth: '500px',
    marginBottom: !lastOne ? '10px' : '60px',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '0 1 85%',
      }}
    >
      <Card sx={cardStyles}>
        <CardMedia component='img' height='250' image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {github && (
            <a href={github} rel='noreferrer' target='_blank'>
              <Button size='small' sx={{ color: '#424242' }}>
                <Github />
                View on Github
              </Button>
            </a>
          )}
          {deployed && (
            <a href={deployed} rel='noreferrer' target='_blank'>
              <Button size='small' sx={{ color: '#424242' }}>
                <Link />
                View deployed
              </Button>
            </a>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
