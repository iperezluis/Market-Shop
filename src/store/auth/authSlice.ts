import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IFriend extends AuthState{}; 

export interface AuthState {
  status?: "checking" | "no-authenticated" | "authenticated";
  // verified?: boolean;
  id: string | null;
  email: string | null;
  name: string | null;
  role: string | null;
  friends: IFriend[];
  photoURL?: string | null;
  errorMessage?: string | null;
  hasError?: boolean | "not-error";
}

const initialState: AuthState = {
  status: "checking",
  id: null,
  email: null,
  name: null,
  role: null,
  friends: [],
  // products TODO
  photoURL: null,
  errorMessage: null,
  hasError: "not-error",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
     currentUser: (state: AuthState, action: PayloadAction<AuthState>) => {
        (state.id = action.payload.id),
        (state.email = action.payload.email),
        (state.name = action.payload.name),
        (state.photoURL = action.payload.photoURL),
        (state.errorMessage = null),
        (state.friends = action.payload.friends),
        (state.role = action.payload.role),
         (state.hasError = "not-error"),
    },
    login: (state, action: PayloadAction<AuthState>) => {
      (state.status = "authenticated"),
    },
    logout: (state, action: PayloadAction<string | null>) => {
      (state.status = "no-authenticated"),
        (state.id =null),
        (state.email =null),
        (state.name = null),
        (state.photoURL = null),
        (state.errorMessage = null),
        (state.friends = []),
        (state.role = null),
         (state.hasError = "not-error"),
    },
    checkStatus: (state) => {
      state.status = "checking";
    },
    cachError: (state: AuthState, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  checkStatus,
  currentUser,
  cachError,
} = authSlice.actions;

// export default authSlice.reducer;
