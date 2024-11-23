import { useMutation } from "@tanstack/react-query";
import { SignInType, SingUpType } from "../pages/authentication/type";
import { saveAccessToken } from "../utils/token-serveice";
import Notification from "../utils/notification";
import { useAxios } from "./useAxios";
import { useContext } from "react";
import { Context } from "../context/AuthContext";

// Sign IN actions
export function useSignIn(){
  const {setAccessToken} = useContext(Context)

    async function signIn(data:SignInType){
        return await useAxios().post(`auth/sign-in`, data)
    }
    return useMutation({
        mutationFn:(data:SignInType) => signIn(data),
        onSuccess: (res) => {
            const {access_token} = res?.data?.data?.tokens;
            setAccessToken(access_token);
            saveAccessToken(access_token);
        },
        onError: (err) => {
            Notification('error', err?.message)
        }
    })
};

// Sign UP actions

export function useSignUp(){
    async function signUp(data:SingUpType){
        return await useAxios().post(`auth/admin/sign-up`, data)
    }
    return useMutation({
        mutationFn:(data: SingUpType) => signUp(data) ,
        onSuccess: () => {
            Notification('success', 'Sign Up Successful');
            window.location.href = '/'
        },
        onError: (err) => {
            Notification('error', err?.message)
        }
    })
};