
import { SidebarContext } from '@/contexts/SidebarContext'
import { Typography ,Card, Box, Button, ListItem, Collapse } from '@mui/material'
import React, { useContext, useState } from 'react'

import { Col } from 'reactstrap'
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChemistryBoard from './ChemistryBoard';

type Props = {}

function ChemistryLesson({}: Props) {
    const { closeSidebar } = useContext(SidebarContext);
    const [open, setOpen] = useState(false);
    
      const handleClick = () => {
        setOpen((prev) => !prev);
      };
  return (
    <>
    <div className="initial_board">
      <Card className="m-3">
         <Typography sx={{margin:"1em auto",display:"flex",justifyContent:"center"}}>آزمون شماره 10 دوازدهم تجربی </Typography>
         <div className="time_board d-flex row">
        <Col>
<Box sx={{margin:'1em'}}>
 <span>20 تست (از شماره 1 تا20)</span> &nbsp; &nbsp; <strong>مدت زمان پیشنهادی:</strong><span> 20دقیقه</span><br />
<strong>حسابان 1 </strong><span>فصل 1 وفصل 2 (تاابتدای کاتالیزگرها) /صفحه های 5تا 11 </span>

</Box>

<ListItem component="div" onClick={handleClick}>
                <Button
                  disableRipple
                  component="a"
                  onClick={closeSidebar}
                  startIcon={<img src="/static/images/menu/doc.svg" />}
                >
               <span>بسته های مرتبط</span>
                  <span
            
                  >
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </span>
                </Button>
              </ListItem>

              <Collapse in={open} unmountOnExit>
                <div className='d-flex '>
                  <Col>
                  <ChemistryBoard />
                  </Col>
             <Col>
             <ChemistryBoard />
             </Col>
             <Col>
             <ChemistryBoard />
             </Col>
           <Col>
           <ChemistryBoard />
           </Col>
           <Col>
           <ChemistryBoard />
           </Col>
          

          
            
             </div>
              </Collapse>
</Col>  
       
         </div>
      </Card>

    </div>

    </>
  )
}

export default ChemistryLesson