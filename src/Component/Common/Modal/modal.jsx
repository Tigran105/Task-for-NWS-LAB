import React, {useState} from 'react';
import {Button, Dialog, TextField} from '@material-ui/core';
import modalStyle from "./modal.module.scss"
import { v4 as uuidv4 } from 'uuid';

export default function BasicModal({open, setOpen,fnc}) {
    const handleClose = () => setOpen(false);
    const [value, setValue] = useState("")

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={modalStyle.content}>
                    <TextField
                        variant="outlined"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => {
                            fnc({id:uuidv4(), name:value})
                            handleClose()
                        }}
                    >
                        Save
                    </Button>

                </div>
            </Dialog>
        </div>
    );
}