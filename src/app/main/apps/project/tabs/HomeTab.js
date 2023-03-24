import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { selectWidgets } from '../store/widgetsSlice';

function HomeTab() {
  const dashData = useSelector(({ auth }) => auth.common.dashboardData);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div className="flex flex-wrap" variants={container} initial="hidden" animate="show">
      {dashData &&
        dashData.length > 0 &&
        dashData.map((a) => {
          const colorSensor = a.bit ? 'green' : 'red';
          const valueSensor = a.sensorValue ? a.sensorValue : 'NO';
          const nameSensor = a.sensorName ? a.sensorName : 'Sensor Name';
          const sesVal = a.sensorName ? `Sensor Value of ${a.sensorName}` : 'Sensor Value';
          return (
            <motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
              <Paper key={a} className="w-full rounded-20 shadow flex flex-col justify-between">
                <div className="flex items-center justify-between px-4 pt-8">
                  <Typography className="text-16 px-16 font-medium" color="textSecondary">
                    {`${nameSensor}`}
                  </Typography>
                  {/* <IconButton aria-label="more" size="large">
                    <Icon> account_tree</Icon>
                  </IconButton> */}
                </div>
                <div className="text-center py-12">
                  <Typography
                    className={`text-72 mb-16 font-semibold leading-none text-${colorSensor} tracking-tighter`}
                  >
                    {valueSensor}
                  </Typography>
                  <Typography className={`text-18 font-normal text-${colorSensor}-800 mb-32`}>
                    {sesVal}
                  </Typography>
                </div>
              </Paper>
            </motion.div>
          );
        })}
    </motion.div>
  );
}

export default HomeTab;
