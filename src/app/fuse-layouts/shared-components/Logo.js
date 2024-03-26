import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import i18next from 'i18next';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge, & > .logo-text': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      <img className="logo-icon w-48 h-48" src="assets/images/logos/fuse.png" alt="logo" />
      {/* <img className="logo-icon w-24 h-24" src="assets/images/logos/fuse.svg" alt="logo" /> */}
      <Typography className="logo-text text-16 leading-none mx-28 font-medium" color="inherit">
        {i18next.t(`navigation:TITLE`)}

      </Typography>
      
    </Root>
  );
}

export default Logo;
