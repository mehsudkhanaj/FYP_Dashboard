import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import i18next from 'i18next';
import { useSelector } from 'react-redux';

function WidgetWeather(props) {
  const dashData = useSelector(({ auth }) => auth.common.dashboardData);

  return (
    <Paper className="w-full rounded-20 shadow flex flex-col justify-between">
      <div className="flex items-center justify-between px-4 pt-0">
        <div className="flex items-center px-16">
          {/* <Icon color="action">location_on</Icon> */}
          <Typography className="text-16 mx-8 mt-10 font-medium" color="textSecondary">
            {i18next.t(`navigation:TOTALSTORES`)}
          </Typography>
        </div>
        {/* <IconButton aria-label="more" size="large">
          <Icon>layers</Icon>
        </IconButton> */}
      </div>
      <div className="flex items-center justify-center p-6">
        <Typography className="text-44 font-medium tracking-tighter" color="textSecondary">
          {dashData && dashData.length > 0 ? dashData.length : 0}
        </Typography>
      </div>
      <div className="flex items-center justify-center pb-12">
        <Typography className="font-semibold">
          {i18next.t(`navigation:TOTALNBROFSTORES`)}
        </Typography>
      </div>
    </Paper>
  );
}

export default memo(WidgetWeather);
