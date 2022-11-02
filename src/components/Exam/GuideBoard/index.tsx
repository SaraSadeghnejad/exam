import { Card, Link } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



const GuideBoard = () =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return(
    <>
    <Card className="guideBoard d-flex mt-2  mx-3"> 
  <Link className="downloadPdf" onClick={handleOpen}><img src="images/pdf.png" /></Link>
    <Button className="watchModal" onClick={handleOpen}><img src="images/rectangle.png" /></Button>
  <span className="guide-line  mx-2">راهنمای شرکت در آزمون ها</span>

<Modal 
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{ ...style, width: 400 }}>
    <h2 id="parent-modal-title">Text in a modal</h2>
    <p id="parent-modal-description">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </p>
  </Box>
</Modal>
<div className="guidePart d-flex  mr-auto ml-3">دانلود برنامه آزمون های دوازدهم تجربی</div>
    </Card>
    </>
  )
}
export default GuideBoard;