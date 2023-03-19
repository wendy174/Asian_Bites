import TextField from '@mui/material/TextField';

function Header() {

    return (
        <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}

export default Header