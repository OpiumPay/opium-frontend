import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardStep from './../components/cardStep';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <ConnectButton />
        <Box sx={{ flexGrow: 1, height: '100vh' }}>
          <Grid container spacing={2}>
            {/* First Half */}
            <Grid item xs={2}>
              <Button variant="contained" color="primary">Registration</Button>
            </Grid>

            {/* Second Half */}
            <Grid item xs={10} >
              {/* Content for the second half */}
              <Grid container spacing={2} direction="column">
                {/* Sub-Grid 3 */}
                <Grid item xs={6}>

                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <CardStep stepNumber={1}>
                        This is the first step.
                      </CardStep>
                    </Grid>
                    <Grid item xs={4}>
                      <CardStep stepNumber={2}>
                        This is the second step.
                      </CardStep>
                    </Grid>
                    <Grid item xs={4}>
                      <CardStep stepNumber={3}>
                        This is the third step.
                      </CardStep>
                    </Grid>
                  </Grid>

                </Grid>
                {/* Sub-Grid 4 */}
                <Grid item xs={6} >

                  <Grid item xs={6} >
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={4} >
                      <CardStep stepNumber={1}>
                        This is the first step. Add your details here.
                      </CardStep>
                    </Grid>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={4}>
                        <CardStep stepNumber={2}>
                          This is the second step. More details go here.
                        </CardStep>
                      </Grid>
                      <Grid item xs={4}>
                        <CardStep stepNumber={3}>
                          This is the third step. More details go here.
                        </CardStep>
                      </Grid>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </main>

      <footer className={styles.footer}>
        <a href="https://coria.tech" rel="noopener noreferrer" target="_blank">
          @ 2023 by Coria
        </a>
      </footer>
    </div>
  );
};

export default Home;
