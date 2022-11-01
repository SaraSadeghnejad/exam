
import { Typography ,Card, Box } from '@mui/material'

import React from 'react'
import { Col } from 'reactstrap'
import Countdown from 'react-countdown';
import CurrentLesson from './CurrentLesson';

type Props = {}
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <h1>Helloooo</h1>
    } else {
      // Render a countdown
      return (
        <span>
          <span className="timer_board">{hours}</span>:<span className="timer_board">{minutes}</span>:<span className="timer_board">{seconds}</span>
        </span>
        
      );
    }
  };
function CurrentExam({}: Props) {
  return (
    <>
    <div className="initial_board">
      <Card className="m-3">
         <Typography sx={{margin:"1em auto",display:"flex",justifyContent:"center"}}>آزمون شماره 10 دوازدهم تجربی </Typography>
         <div className="time_board d-flex row">
        <Col>
<Box sx={{margin:'1em'}}>
<h4 className="m-1">بازه زمانی  برگزاری:
</h4>
    از ساعت 14 روز 
  1401/02/21<br />
تا ساعت 14 روز   1401/02/22
</Box>
<span className="download_link">دانلود برنامه و جزئیات آزمون</span>
</Col>  
         <Col className="d-flex justify-content-center">
         <Countdown date={Date.now() + 23000} renderer={renderer} />
         </Col>
         <Col>
    <div>
            <span >تعداد کل تست ها: </span><span>180 تست</span>
         </div>
         <div>
            <span >مدت زمان آزمون:  </span><span> 2 ساعت و 45 دقیقه</span>
            </div>
          </Col>
         </div>
      </Card>

    </div>
    <CurrentLesson />
    </>
  )
}

export default CurrentExam