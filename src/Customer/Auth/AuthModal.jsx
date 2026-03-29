import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react'
import Registerform from './Registerform';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  outline:'none',
  boxShadow: 24,
  p: 4,
};

export const AuthModal = ({handleClose,open}) => {
    return (
        <div >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='text-black-600'>
                    
                    <Registerform/>
                </Box>
            </Modal>
        </div>
    )
}
export default AuthModal;