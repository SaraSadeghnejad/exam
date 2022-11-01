/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
// material-ui
import { Box } from '@mui/material';
import MainCard from 'pages/components/cards/MainCard';
// project import
// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //
const AuthCardWrapper = ({ children, ...other }) => (
    <MainCard
        sx={{
            maxWidth: { xs: 600, lg: 500 }
        }}
        style={{ padding: '0!important' , border: 'none'}}
        content={false}
    >
        <Box sx={{ p: { xs: 2, sm: 3, xl: 12 } }}>{children}</Box>
    </MainCard>
);

AuthCardWrapper.propTypes = {
    children: PropTypes.node
};

export default AuthCardWrapper;
