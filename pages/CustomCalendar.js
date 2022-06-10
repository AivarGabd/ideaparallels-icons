import React from 'react';
import 'antd/dist/antd.css';
import { Calendar, Col, Radio, Row, Select, Typography } from 'antd';


const CustomCalendar = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className="site-calendar-customize-header-wrapper">
      <Calendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const month = value.month();
          const year = value.year();


          return (
            <div>
              {month} {year}
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default CustomCalendar;