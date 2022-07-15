import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from "./Elements/Button/Button"
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from "../features/modal-slice"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 50 + "vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal({ btn, children }) {
    const dispatch = useDispatch()

    const { open } = useSelector(store => store.modal)

    const handleOpen = () => {
        dispatch(openModal())
        console.log(open)
    }
    const handleClose = () => {
        dispatch(closeModal());
    }

    return (
        <div>
            <Button theme="primary  " onClick={handleOpen}>{btn}</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
