import { createSlice } from "@reduxjs/toolkit";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeFirebase from "../../Pages/User/Firebase/Firebase.init";

initializeFirebase();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    currentUser: {},
    displayName: "",
    authError: "",
  },
  reducers: {
    signInWithGoogle: (state, action) => {
      state.isLoading = true;
      signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result?.user;
             state.currentUser= user
        })
        .catch((error) => {
          state.authError = 'error.message';
        })
        .finally(() => {state.isLoading = false});
    },
  },
});

export const { signInWithGoogle } = userSlice.actions;

export default userSlice.reducer;
