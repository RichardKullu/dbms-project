import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from "../Components/Elements/Button/Button"
import styles from "./Login.module.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid"

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login, startLoginLoading } from "../features/auth-slice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const { loginSubmittingForm } = useSelector(store => store.auth)

  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")



  const notify = (text, stat) => toast[stat](text);
  const handleMouseLeave = () => password === confirmPassword ? notify("Password matched", "success") : notify("Password does not match.", "warn")
  const handleMouseOut = () => password.length < 5 ? notify("Password is too short", "warn") : ""



  const handleSubmit = () => {
    dispatch(startLoginLoading())
    const payload = {
      email,
      password,
    }
    dispatch(login(payload))

  }
  return (
    <>
      <ToastContainer />
      <div className={styles["content"]}>
        <div className={styles["login_form"]}>
          <Link to="/">
            <Button theme="primary">
              <ArrowBackIosIcon />
            </Button>
          </Link>
          <h1 style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>Sign In</h1>

          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            style={{ minHeight: '100vh' }}
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >

            <div>
              <TextField
                required
                id="outlined-required"
                label="Username/Emails"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div>
              <TextField
                required
                id="outlined-required"
                label="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onMouseOut={handleMouseOut}
              />
            </div>


            <div>
              <LoadingButton
                className={styles["sign"]}
                size="large"
                color="secondary"
                onClick={handleSubmit}
                loading={loginSubmittingForm}
                loadingPosition="center"
                variant="contained"
              >
                Login
              </LoadingButton>


            </div>
            <div style={{ position: "absolute", bottom: 50, right: 50 }}>
              <Link to="/register">Don't have an account? Register</Link>
            </div>
          </Grid>
        </div >
      </div >
    </>
  )
}


