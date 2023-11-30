'use client';

import Link from "next/link";
import headerClassNames from "./headerClassNames";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useAppDispatch } from "@/hooks/storeHook";
import useCartTotals from "@/hooks/useCartTotals";
import { toggleCart } from "@/redux/features/cartSlice";
import Signup from "../Signup/Signup";
import { useState } from "react";

const Header = () => {
    const {
        header,
        container,
        li,
        logoContainer,
        link,
        logo,
        nav,
        orders,
        ul,
        contactUs,
        signupBtn,
        signinBtn,
        logoutBtn,
        cart,
    } = headerClassNames;

    const {totalQuantity} = useCartTotals();
    const dispatch = useAppDispatch();

    const [isSignupFormOpen, setIsSignUpFormOpen] = useState(false);

    const toggleForm = () => {
        setIsSignUpFormOpen(!isSignupFormOpen);
    };

    return (<>
        <Signup isSignupFormOpen={isSignupFormOpen} toggleForm={toggleCart}/>
        <header className={header}>
            <div className={container}>
                <Link href='\' className={logoContainer}>
                    <h1 className={logo}>Logo</h1>
                </Link>

                <nav className={nav}>
                    <ul className={ul}>
                        <li>
                            <button className={link}
                            onClick={() => dispatch(toggleCart())}>
                                <span>Cart
                                <AiOutlineShoppingCart className='inline-block text-3xl' />
                                </span>
                                <div className={cart}>{totalQuantity}</div>
                            </button>
                        </li>

                        <li className="flex items-center justify-center h-7">
                            <Link href='/orders' className={orders}>
                                Orders
                            </Link>
                            <button className={logoutBtn}>Logout</button>
                            <button className={signupBtn} onClick={toggleForm}>Sign Up</button>
                            <button className={signinBtn}>
                                Sign In
                                <FcGoogle
                                    style={{
                                        fontSize: '25px',
                                        cursor: 'pointer',
                                        marginLeft: '12px',
                                    }}
                                    className={link} 
                                />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
        );
}; 

export default Header;