import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
// import { useDispatch, useSelector } from "react-redux";
import { AccountCircle, Google, LockOpen } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
// import { RootState } from "../../store";
import { SkeletonJournal } from "../../components";
// import { useForm } from "../../hooks";
import { validations } from "../../utils";
// import {
//   checkingAuthentication,
//   startGoogleSignIn,
//   startLoginEmailPassword,
// } from "../../store/auth/thunks";

type FormData = {
  email: string;
  password: string;
};
export const LoginPage = () => {
  // const { status, errorMessage } = useSelector(
  //   (state: RootState) => state.auth
  // );
  // const dispath = useDispatch() as any;
  //useMemo para quew no tenga que calcular el estatus de nuevo oslo cuando el status cambie

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  // console.log({ errors });

  const isAuthenticating = useMemo(
    (): boolean => status === "checking",
    [status]
  );

  const login_user = gql`
    mutation LoginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        value
      }
    }
  `;
  const [loginUser, { data, loading, error }] = useMutation(login_user, {
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });
  if (error) console.log("error", `${error.message}`);
  if (loading) console.log("loading mutation...");

  useEffect(() => {
    if (data) {
      console.log({ data });
    }
  }, [data]);

  const onSubmit = ({ email, password }: FormData) => {
    console.log({ email, password });
    const res = loginUser({ variables: { email, password } });
    if (!data) return;
    console.log({ data });
    console.log(res);
  };

  return (
    <AuthLayout title={"Acceder"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate__animated animate__fadeIn animate__faster"
        noValidate
      >
        <Grid container>
          <Grid item xs={12}>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle sx={{ fontSize: 30, color: "#000" }} />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2, mt: 2 }}
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              {...register("email", {
                required: "This field is required",
                validate: validations.isEmail,
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOpen sx={{ fontSize: 30, color: "#000" }} />
                  </InputAdornment>
                ),
              }}
              label="Password"
              type="password"
              placeholder="*********"
              // value={password}
              // onChange={onInputChange}
              fullWidth
              {...register("password", {
                required: "This field is required",
                minLength: { value: 5, message: "Min 5 characters " },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid
            container
            sx={{ mt: 1 }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {/* <Grid
              item
              xs={12}
              sx={{
                display: errorMessage ? "block" : "none",
              }}
            >
              <Alert severity="error">
                {errorMessage?.replace("Firebase", "Alert")}
              </Alert>
            </Grid> */}

            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
                startIcon={<AccountCircle />}
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crea una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
