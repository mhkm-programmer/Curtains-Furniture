import { Link } from 'react-router-dom';
import PageTitle from '../reusable/PageTitle';
import React from 'react';
import { motion } from 'framer-motion';

const ErrorPage = () => {
    return (
        <motion.main
           initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        <PageTitle title="AL-FWX Furniture Trading & Contracting | Error" />
        <motion.div
                className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
            >
            <div className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
                <div className="flex-1 max-w-lg">
                    <img src="https://i.ibb.co/r03Pv6N/6342464-min.jpg" />
                </div>
                <div className="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
                    <h3 className="text-teal-600 font-semibold">
                        404 Error
                    </h3>
                    <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </p>
                    <p className="text-gray-600">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <Link href="javascript:void(0)" className="text-blue-600 duration-150 hover:text-teal-600 font-medium inline-flex items-center gap-x-1">
                        Go Back Home
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </motion.div>
    </motion.main>
    );
};

export default ErrorPage;