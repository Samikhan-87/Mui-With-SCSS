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
import { green, red } from '@mui/material/colors';
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
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            MA
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="UI UX Designing By Miss Aqsa"
        subheader="August 21, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/21.jpg"
        alt="UI UX Designing"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
UI/UX designing is an exhilarating realm where creativity and innovation converge to redefine digital interactions and elevate user experiences.
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
  Miss Aqsa brings her expertise as a seasoned UI/UX designer, specializing in creating intuitive and visually appealing digital experiences.
</Typography>
<Typography paragraph>
  Begin with mastering the fundamentals of user interface and user experience design principles, focusing on creating engaging and effective designs.
</Typography>
<Typography paragraph>
  Explore the psychology of user interaction and user-centered design methodologies to craft interfaces that resonate with target audiences.
</Typography>
<Typography>
  Dive into advanced prototyping tools like Figma or Adobe XD to bring your design concepts to life and iterate efficiently.
</Typography>
<Typography>
  Collaborate closely with development teams to ensure seamless integration of design and functionality, enhancing overall user satisfaction.
</Typography>
<Typography>
  Implement usability testing and feedback loops to refine and optimize your designs based on real user insights.
</Typography>
<Typography>
  Stay updated with industry trends and emerging technologies to continually innovate and deliver cutting-edge design solutions.
</Typography>
<Typography>
  Build a diverse portfolio showcasing your expertise in creating impactful user experiences across various platforms and devices.
</Typography>
<Typography>
  Ultimately, leverage your skills to contribute to successful product launches and establish a rewarding career in UI/UX design.
</Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
