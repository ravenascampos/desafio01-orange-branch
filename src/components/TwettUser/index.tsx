import { MoreHoriz } from '@mui/icons-material';
import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import {
  Comment,
  Like,
  Retweet,
  Share,
  Statistics,
} from '../../../public/icons';
import Image from 'next/image';

type TweetUserProps = {
  userName: React.ReactNode;
  userEmail: React.ReactNode;
  date: React.ReactNode;
  description: React.ReactNode;
  comments: React.ReactNode;
  retweets: React.ReactNode;
  likes: React.ReactNode;
};

function TweetUser({
  userName,
  userEmail,
  date,
  description,
  comments,
  retweets,
  likes,
}: TweetUserProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container sx={{ maxWidth: '900px' }}>
      <Grid container direction="row" flexWrap="nowrap">
        <Grid
          container
          direction="row"
          flexWrap="nowrap"
          columnGap={{ xs: 2, sm: 2, md: 2 }}
          rowGap={{ xs: 2 }}
          maxWidth={{ xs: '80%' }}
        >
          <Grid item>
            <Avatar
              sx={{
                width: isMobile ? '40px' : '60px',
                height: isMobile ? '40px' : '60px',
              }}
            />
          </Grid>
          <Grid>
            <Grid container item alignItems="center" mb={1}>
              <Typography
                variant="h5"
                sx={{
                  mr: 1,
                }}
              >
                {userName}
              </Typography>
              <Typography
                sx={{
                  opacity: '60%',
                  // ml: 1,
                }}
                variant="body1"
              >
                {`@${userEmail} • ${date}`}
              </Typography>
            </Grid>
            <Grid item mb={1}>
              <Typography variant="body1">{description}</Typography>
            </Grid>
            <Grid item mb={2}>
              <Image
                src="/images/background-signup.png"
                width={100}
                height={100}
                alt=""
                sizes="100vh"
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              flexWrap="nowrap"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                flexWrap={{ xs: 'nowrap', md: 'wrap' }}
              >
                <IconButton>
                  <Comment />
                </IconButton>
                <Typography variant="subtitle2">{comments}</Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                flexWrap={{ xs: 'nowrap', md: 'wrap' }}
              >
                <IconButton>
                  <Retweet />
                </IconButton>
                <Typography variant="subtitle2">{retweets}</Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                flexWrap={{ xs: 'nowrap', md: 'wrap' }}
              >
                <IconButton>
                  <Like />
                </IconButton>
                <Typography variant="subtitle2">{likes}</Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconButton>
                  <Share />
                </IconButton>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconButton>
                  <Statistics />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
}

export default TweetUser;
