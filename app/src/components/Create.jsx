import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

// form validation import
import { useForm } from "react-hook-form";

const Create = () => {
    //form validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ title, price }) => {
        price = Number(price);
        fetch('http://localhost:3100/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, price }),
        }).then(() => {
            navigation('/home');
        });
    };

    const navigation = useNavigate();

    // Use MUI's useMediaQuery hook to detect screen size
    // @ts-ignore
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: isSmallScreen ? "100%" : "390px" }}>
            <TextField
                label="Title"
                id="filled-start-adornment"
                sx={{ ml: isSmallScreen ? 'unset' : '9px', width: isSmallScreen ? "100%" : "40ch", mt: 2 }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
                }}
                variant="outlined"
                {...register("title", { required: { value: true, message: '* required field' }, minLength: { value: 3, message: 'minlength at least 3' } })}
                // @ts-ignore
                helperText={errors.title ? errors.title.message : ''}
                FormHelperTextProps={{ sx: { color: '#ff8a80', fontSize: '16px' } }}
            />

            <TextField
                label="Amount"
                id="filled-start-adornment"
                sx={{ ml: isSmallScreen ? 'unset' : '9px', width: isSmallScreen ? "100%" : "40ch", mt: 2 }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant="outlined"
                {...register("price", { required: { value: true, message: '* required field' } })}
                // @ts-ignore
                helperText={errors.price ? errors.price.message : ''}
                FormHelperTextProps={{ sx: { color: '#ff8a80', fontSize: '16px' } }}
            />

            <Button type="submit" variant="contained" sx={{ ml: isSmallScreen ? 'unset' : '10px', mt: 3 }} endIcon={<SendIcon />}>
                Send
            </Button>
        </Box>
    );
};

export default Create;
