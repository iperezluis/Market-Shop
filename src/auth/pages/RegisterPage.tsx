import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";

// import { useDispatch, useSelector } from "react-redux";
import { AccountCircle, Badge, Google, LockOpen } from "@mui/icons-material";
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
import { FormEvent, useMemo, useState } from "react";
import { validations } from "../../utils";
import { gql, useMutation } from "@apollo/client";

type FormData = {
  name: string;
  email: string;
  password: string;
};
export const RegisterPage = () => {
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
  console.log({ errors });

  const isAuthenticating = useMemo(
    (): boolean => status === "checking",
    [status]
  );
  const register_user = gql`
    mutation RegisterUser($name: String!, $email: String!, $password: String!) {
      registerUser(name: $name, email: $email, password: $password) {
        id
        name
        email
        password
        role
        friends {
          name
        }
      }
    }
  `;
  const [registerUser, { data, loading, error }] = useMutation(register_user, {
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });
  if (error) console.log("error", `${error.message}`);
  if (loading) console.log("loading mutation...");
  if (data) console.log({ data });
  const onSubmit = ({ name, email, password }: FormData) => {
    console.log({ name, email, password });
    registerUser({ variables: { name, email, password } });
    console.log({ data });
  };

  return (
    <AuthLayout title={"Crea una cuenta"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12}>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Badge sx={{ fontSize: 30, color: "#000" }} />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2, mt: 2 }}
              label="Nombre"
              type="text"
              placeholder="nombre"
              {...register("name", {
                required: "This field is required",
                minLength: { value: 3, message: "Min 3 characters " },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
            />
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
              {...register("email", {
                required: "This field is required",
                validate: validations.isEmail,
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
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
              {...register("password", {
                required: "This field is required",
                minLength: { value: 5, message: "Min 5 characters " },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
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
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
            <Link component={RouterLink} color="primary.main" to="/auth/login">
              <Typography sx={{ textDecoration: "none", fontWeight: "bold" }}>
                ¿Ya tienes una cuenta? Inicia sesion.
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
