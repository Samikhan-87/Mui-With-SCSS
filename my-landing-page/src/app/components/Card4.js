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
import { blue, blueGrey, green, pink, red, yellow } from '@mui/material/colors';
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
          <Avatar sx={{ bgcolor:pink[800] }} aria-label="recipe">
            SU
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shopify By Sir Umer "
        subheader="Nov 18, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/10645318.jpg"
        alt="Shopify"
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
At Shopify, we lead the charge in e-commerce innovation, blending creativity and strategic expertise to enhance online shopping experiences and drive business growth through customized Shopify solutions.
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
  Sir Umer is recognized as a specialist in Shopify, offering unparalleled expertise and guidance in e-commerce strategies and platform optimization.
</Typography>
<Typography paragraph>
  Begin your Shopify journey under Sir Umer's mentorship by mastering foundational principles in e-commerce, focusing on creating compelling and effective online store experiences.
</Typography>
<Typography paragraph>
  Explore advanced strategies in user interaction and customer-centric design methodologies with Sir Umer to craft seamless shopping experiences that resonate with your target audience.
</Typography>
<Typography>
  Utilize cutting-edge Shopify tools and features recommended by Sir Umer to optimize your online store, improve user engagement, and drive sales.
</Typography>
<Typography>
  Collaborate closely with Sir Umer to ensure seamless integration of design and functionality, enhancing overall customer satisfaction and retention.
</Typography>
<Typography>
  Implement rigorous testing and analytics under Sir Umer's guidance to refine and optimize your Shopify store based on real customer insights.
</Typography>
<Typography>
  Stay ahead of industry trends and emerging technologies in e-commerce with insights from Sir Umer, ensuring your Shopify store remains competitive and innovative.
</Typography>
<Typography>
  Build a robust portfolio showcasing your successful Shopify implementations and strategies, demonstrating your expertise in creating impactful online retail experiences.
</Typography>
<Typography>
  Ultimately, leverage your skills under Sir Umer's expert guidance to achieve sustainable growth and success for your business on Shopify.
</Typography>


        </CardContent>
      </Collapse>
    </Card>
  );
}
