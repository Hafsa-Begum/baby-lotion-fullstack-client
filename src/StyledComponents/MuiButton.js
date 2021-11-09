import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MuiButton = styled(Button)({
    background: '#F63E7B',
    color: '#fff',
    paddingRight: '15px',
    paddingLeft: '15px',
    '&:hover': {
        background: '#FFB6C1',
        color: '#000',
        paddingRight: '15px',
        paddingLeft: '15px',
    }
})

export default MuiButton;