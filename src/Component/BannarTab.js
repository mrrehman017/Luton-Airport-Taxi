import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import svgLocation from '../assets/Images/fromLocation.svg'
import { FaSearch } from "react-icons/fa";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BannarTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="One way" {...a11yProps(0)} />
          <Tab label="Via" {...a11yProps(1)} disabled />
          <Tab label="Return" {...a11yProps(2)} disabled  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='row'>
            <div className='col-lg-3 col-sm-6'>
                <div className='From_section'>
                    <div className='svgFrom'>
                        <img src={svgLocation} alt=''/>
                    </div>
                    <div className='Set_location'>
                        <span>From</span>
                        <p>London Luton Airport (LTN)</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
            <div className='From_section'>
                    <div className='svgFrom'>
                        <img src={svgLocation} alt=''/>
                    </div>
                    <div className='Set_location'>
                        <span>To</span>
                        <p>London Luton Airport (LTN)</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-2 col-sm-6'>
                <div className='dateTimeMain'>
                    <div className='dateTimeMainBody'>
                        <div className='Date_time'>
                            <span>Dates - Time</span>
                        </div>
                        <div className='show_date_Time'>
                            <h5>23</h5>
                            <p>September<br/>Wed, 13:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
                <div className='searchBtns'>
                    <button className='via_btn'>Via</button>
                    <button className='returnBtn'>Add Return</button>
                    <button className='searchBtn'><FaSearch/></button>
                </div>
            </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
