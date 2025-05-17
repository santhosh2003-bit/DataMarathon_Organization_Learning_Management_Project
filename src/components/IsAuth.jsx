"use client";
import { useEffect } from "react";
import { redirect, useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function IsAuth(Component) {

    return function IsAuth(props) {
        const dispatch = useDispatch()
        const pathname = usePathname()
        const router = useRouter()
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)


        useEffect(() => {

            if (!isLoggedIn && pathname == '/profile') {
                redirect("/login");
            }

            if (isLoggedIn && ['/register', '/login'].includes(pathname)) {
                redirect("/");
            }
        }, [isLoggedIn, pathname]);



        return <Component {...props} />;
    };
}