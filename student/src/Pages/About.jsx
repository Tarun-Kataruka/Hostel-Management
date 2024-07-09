import React from 'react';
import { Container, Grid, Paper, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContainerStyled = styled(Container)(({ theme }) => ({
  marginTop: '2rem',
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: '1rem auto',
  width: theme.spacing(10),
  height: theme.spacing(10),
  backgroundColor: theme.palette.primary.main,
}));

const BoxStyled = styled(Box)(({ theme }) => ({
  padding: '1rem',
  textAlign: 'center',
}));

const AboutUs = () => {
  return (
    <ContainerStyled>
      <PaperStyled>
        <Typography variant="h3" gutterBottom>About Us</Typography>
        <Typography variant="body1" paragraph>
          Welcome to our Hostel Management System! Our mission is to create an efficient, user-friendly platform to streamline hostel operations, from handling complaints to managing food menus, gate passes, and student records. We believe in leveraging technology to make hostel management seamless and hassle-free.
        </Typography>
        <Typography variant="body1" paragraph>
          Our system is designed to cater to both administrative staff and students, ensuring a smooth and organized hostel experience for everyone involved. We are dedicated to continuously improving our platform based on user feedback and the latest technological advancements.
        </Typography>
        <Typography variant="h5" gutterBottom>Our Team</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <BoxStyled>
              <AvatarStyled>T</AvatarStyled>
              <Typography variant="h6">Tarun Kataruka</Typography>
              <Typography variant="body2">1DS22CS232</Typography>
            </BoxStyled>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <BoxStyled>
              <AvatarStyled>V</AvatarStyled>
              <Typography variant="h6">Varnit Raina</Typography>
              <Typography variant="body2">1DS22CS243</Typography>
            </BoxStyled>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <BoxStyled>
              <AvatarStyled>T</AvatarStyled>
              <Typography variant="h6">Tarun </Typography>
              <Typography variant="body2">1DS22CS231</Typography>
            </BoxStyled>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <BoxStyled>
              <AvatarStyled>V</AvatarStyled>
              <Typography variant="h6">Valmiki Vijay Kumar</Typography>
              <Typography variant="body2">1DS22CS242</Typography>
            </BoxStyled>
          </Grid>
        </Grid>
      </PaperStyled>
    </ContainerStyled>
  );
};

export default AboutUs;
