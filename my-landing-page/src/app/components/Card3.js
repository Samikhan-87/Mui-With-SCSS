import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LearnStyles from '../styles/LearnCources.module.scss';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Card2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={LearnStyles.Cards} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:blue[600] }} aria-label="recipe">
            SA
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Amazon VA By Sir Ahmed "
        subheader="Oct 18, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/6505894.jpg"
        alt="Amazon VA"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">

Amazon VA thrives at the intersection of creativity and innovation, where we redefine digital interactions and elevate user experiences through cutting-edge design strategies.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>
  Sir Ahmed is celebrated as the leading Amazon VA instructor, offering comprehensive expertise and guidance in mastering digital design strategies.
</Typography>
<Typography paragraph>
  Begin by mastering foundational principles in digital design under Sir Ahmed's mentorship, focusing on creating compelling and effective user experiences.
</Typography>
<Typography paragraph>
  Explore advanced strategies in user interaction and customer-centric design methodologies with Sir Ahmed to craft experiences that resonate with your audience.
</Typography>
<Typography>
  Utilize cutting-edge prototyping tools recommended by Sir Ahmed to bring your concepts to life and iterate efficiently.
</Typography>
<Typography>
  Collaborate closely with teams to ensure seamless integration of design and functionality, enhancing overall user satisfaction.
</Typography>
<Typography>
  Implement rigorous testing and feedback loops to refine and optimize designs based on real user insights.
</Typography>
<Typography>
  Stay informed about industry trends and emerging technologies to innovate and deliver impactful design solutions.
</Typography>
<Typography>
  Build a diverse portfolio showcasing your expertise in creating impactful digital experiences across various platforms and devices.
</Typography>
<Typography>
  Ultimately, leverage your skills to contribute effectively to product success and establish a rewarding career in digital design under Sir Ahmed's expert guidance.
</Typography>


        </CardContent>
      </Collapse>
    </Card>
  );
}
