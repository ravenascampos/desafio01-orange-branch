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
  Bookmarks,
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
  statistics: React.ReactNode;
  imageUrl?: string;
};

function TweetUser({
  userName,
  userEmail,
  date,
  description,
  comments,
  retweets,
  likes,
  statistics,
  imageUrl,
}: TweetUserProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const truncateDescription = (desc: React.ReactNode | string) => {
    if (typeof desc === 'string' && desc.length > 55) {
      return `${desc.substring(0, 55)}...`;
    }
    return desc;
  };
  return (
    <Grid container>
      <Grid
        container
        direction="row"
        flexWrap="nowrap"
        columnGap={{ xs: 1, sm: 1, md: 1 }}
      >
        <Grid
          container
          direction="row"
          flexWrap="nowrap"
          columnGap={{ xs: 1, sm: 1, md: 1 }}
          rowGap={{ xs: 2 }}
          sx={{
            width: isMobile ? '80%' : '100%',
            height: 'auto',
            maxWidth: '516px',
          }}
        >
          <Grid item>
            <Avatar
              sx={{
                width: '40px',
                height: '40px',
              }}
            />
          </Grid>
          <Grid sx={{ width: isMobile ? '80%' : '100%' }}>
            <Grid
              container
              item
              alignItems={isMobile ? 'flex-start' : 'center'}
              mb={1}
              direction={isMobile ? 'column' : 'row'}
            >
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
                }}
                variant="body1"
              >
                {`@${userEmail} • ${date}`}
              </Typography>
            </Grid>
            <Grid item mb={1}>
              <Typography variant="body1">
                {truncateDescription(description)}
              </Typography>
            </Grid>
            {imageUrl && (
              <Grid item mb={2}>
                <Image
                  src="/images/background-signup.png"
                  width={516}
                  height={270.16}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '270.16px',
                    maxWidth: '516px',
                    borderRadius: '20px',
                  }}
                />
              </Grid>
            )}

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
                alignItems="baseline"
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
                alignItems="baseline"
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
                alignItems="baseline"
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
                alignItems="baseline"
                flexWrap={{ xs: 'nowrap', md: 'wrap' }}
              >
                <IconButton>
                  <Statistics />
                </IconButton>
                <Typography variant="subtitle2">{statistics}</Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="baseline"
                flexWrap={{ xs: 'nowrap', md: 'wrap' }}
              >
                <IconButton>
                  <Share />
                </IconButton>
                <IconButton>
                  <Bookmarks />
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
