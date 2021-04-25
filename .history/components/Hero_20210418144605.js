/** Landing section and the top navigation */
import React, {  useState } from "react";
import Typing from './Typing'


const Hero = () => {

     

    const [show, setShow] = useState(false);
    return (
        <>
            <div>
                <nav className="w-full">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <svg aria-label="Home" className="cursor-pointer w-8 sm:w-auto" id="logo" enableBackground="new 0 0 300 300" height={54} viewBox="0 0 300 300" width={53} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path
                                        fill="#FBD38D"
                                        d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                    />
                                </g>
                            </svg>
                            <p className="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800">The North</p>
                        </div>
                        <div>
                            <div onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                                <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={8} x2={20} y2={8} />
                                    <line x1={4} y1={16} x2={20} y2={16} />
                                </svg>
                            </div>
                            <div id="menu" className={show ? "lg:hidden block" : "md:block lg:block hidden"}>
                                <div onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                                <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white z-20">
                                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                        <a href="javascript: void(0)">Company</a>
                                    </li>
                                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                        <a href="javascript: void(0)">Features</a>
                                    </li>
                                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                        <a href="javascript: void(0)">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="w-full px-6">
                    <div className="mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                        <svg className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" width="104px" height="95px" viewBox="0 0 104 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Work-in-Progress" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" opacity="0.122837612">
                                <g transform="translate(-1139.000000, -175.000000)" fill="#FFFFFF">
                                    <g id="Group-5" transform="translate(1139.000000, 175.000000)">
                                        <path d="M1.99948119,4 C0.897535668,4 0,3.10246433 0,1.99948119 C0,0.896498054 0.897535668,0 1.99948119,0 C3.10350195,0 4,0.896498054 4,1.99948119 C4,3.10246433 3.10350195,4 1.99948119,4" id="Fill-46" />
                                        <path d="M22,4 C20.8973029,4 20,3.10246433 20,1.99948119 C20,0.896498054 20.8973029,0 22,0 C23.1037344,0 24,0.896498054 24,1.99948119 C24,3.10246433 23.1037344,4 22,4" id="Fill-47" />
                                        <path d="M42,4 C40.8962656,4 40,3.10246433 40,1.99948119 C40,0.896498054 40.8962656,0 42,0 C43.1016598,0 44,0.896498054 44,1.99948119 C44,3.10246433 43.1016598,4 42,4" id="Fill-48" />
                                        <path d="M62.0005188,4 C60.8964981,4 60,3.10246433 60,1.99948119 C60,0.896498054 60.8964981,0 62.0005188,0 C63.1024643,0 64,0.896498054 64,1.99948119 C64,3.10246433 63.1024643,4 62.0005188,4" id="Fill-49" />
                                        <path d="M81.9984436,4 C80.8964981,4 80,3.10246433 80,1.99948119 C80,0.896498054 80.8964981,0 81.9984436,0 C83.1024643,0 84,0.896498054 84,1.99948119 C84,3.10246433 83.1024643,4 81.9984436,4" id="Fill-50" />
                                        <path d="M102,4 C100.89834,4 100,3.10246433 100,1.99948119 C100,0.896498054 100.89834,0 102,0 C103.103734,0 104,0.896498054 104,1.99948119 C104,3.10246433 103.103734,4 102,4" id="Fill-51" />
                                        <path d="M1.99948119,22 C0.897535668,22 0,21.1024643 0,19.9994812 C0,18.8964981 0.897535668,18 1.99948119,18 C3.10350195,18 4,18.8964981 4,19.9994812 C4,21.1024643 3.10350195,22 1.99948119,22" id="Fill-52" />
                                        <path d="M22,22 C20.8973029,22 20,21.1024643 20,19.9994812 C20,18.8964981 20.8973029,18 22,18 C23.1037344,18 24,18.8964981 24,19.9994812 C24,21.1024643 23.1037344,22 22,22" id="Fill-53" />
                                        <path d="M42,22 C40.8962656,22 40,21.1024643 40,19.9994812 C40,18.8964981 40.8962656,18 42,18 C43.1016598,18 44,18.8964981 44,19.9994812 C44,21.1024643 43.1016598,22 42,22" id="Fill-54" />
                                        <path d="M62.0005188,22 C60.8964981,22 60,21.1024643 60,19.9994812 C60,18.8964981 60.8964981,18 62.0005188,18 C63.1024643,18 64,18.8964981 64,19.9994812 C64,21.1024643 63.1024643,22 62.0005188,22" id="Fill-55" />
                                        <path d="M81.9984436,22 C80.8964981,22 80,21.1024643 80,19.9994812 C80,18.8964981 80.8964981,18 81.9984436,18 C83.1024643,18 84,18.8964981 84,19.9994812 C84,21.1024643 83.1024643,22 81.9984436,22" id="Fill-56" />
                                        <path d="M102,22 C100.89834,22 100,21.1024643 100,19.9994812 C100,18.8964981 100.89834,18 102,18 C103.103734,18 104,18.8964981 104,19.9994812 C104,21.1024643 103.103734,22 102,22" id="Fill-57" />
                                        <path d="M1.99948119,40 C0.897535668,40 0,39.1026971 0,38 C0,36.8973029 0.897535668,36 1.99948119,36 C3.10350195,36 4,36.8973029 4,38 C4,39.1026971 3.10350195,40 1.99948119,40" id="Fill-58" />
                                        <path d="M22,40 C20.8973029,40 20,39.1026971 20,38 C20,36.8973029 20.8973029,36 22,36 C23.1037344,36 24,36.8973029 24,38 C24,39.1026971 23.1037344,40 22,40" id="Fill-59" />
                                        <path d="M42,40 C40.8962656,40 40,39.1026971 40,38 C40,36.8973029 40.8962656,36 42,36 C43.1016598,36 44,36.8973029 44,38 C44,39.1026971 43.1016598,40 42,40" id="Fill-60" />
                                        <path d="M62.0005188,40 C60.8964981,40 60,39.1026971 60,38 C60,36.8973029 60.8964981,36 62.0005188,36 C63.1024643,36 64,36.8973029 64,38 C64,39.1026971 63.1024643,40 62.0005188,40" id="Fill-61" />
                                        <path d="M81.9984436,40 C80.8964981,40 80,39.1026971 80,38 C80,36.8973029 80.8964981,36 81.9984436,36 C83.1024643,36 84,36.8973029 84,38 C84,39.1026971 83.1024643,40 81.9984436,40" id="Fill-62" />
                                        <path d="M102,40 C100.89834,40 100,39.1026971 100,38 C100,36.8973029 100.89834,36 102,36 C103.103734,36 104,36.8973029 104,38 C104,39.1026971 103.103734,40 102,40" id="Fill-63" />
                                        <path d="M1.99948119,59 C0.897535668,59 0,58.1026971 0,57 C0,55.8973029 0.897535668,55 1.99948119,55 C3.10350195,55 4,55.8973029 4,57 C4,58.1026971 3.10350195,59 1.99948119,59" id="Fill-64" />
                                        <path d="M22,59 C20.8973029,59 20,58.1026971 20,57 C20,55.8973029 20.8973029,55 22,55 C23.1037344,55 24,55.8973029 24,57 C24,58.1026971 23.1037344,59 22,59" id="Fill-65" />
                                        <path d="M42,59 C40.8962656,59 40,58.1026971 40,57 C40,55.8973029 40.8962656,55 42,55 C43.1016598,55 44,55.8973029 44,57 C44,58.1026971 43.1016598,59 42,59" id="Fill-66" />
                                        <path d="M62.0005188,59 C60.8964981,59 60,58.1026971 60,57 C60,55.8973029 60.8964981,55 62.0005188,55 C63.1024643,55 64,55.8973029 64,57 C64,58.1026971 63.1024643,59 62.0005188,59" id="Fill-67" />
                                        <path d="M81.9984436,59 C80.8964981,59 80,58.1026971 80,57 C80,55.8973029 80.8964981,55 81.9984436,55 C83.1024643,55 84,55.8973029 84,57 C84,58.1026971 83.1024643,59 81.9984436,59" id="Fill-68" />
                                        <path d="M102,59 C100.89834,59 100,58.1026971 100,57 C100,55.8973029 100.89834,55 102,55 C103.103734,55 104,55.8973029 104,57 C104,58.1026971 103.103734,59 102,59" id="Fill-69" />
                                        <path d="M1.99948119,77 C0.897535668,77 0,76.1026971 0,75 C0,73.8973029 0.897535668,73 1.99948119,73 C3.10350195,73 4,73.8973029 4,75 C4,76.1026971 3.10350195,77 1.99948119,77" id="Fill-70" />
                                        <path d="M22,77 C20.8973029,77 20,76.1026971 20,75 C20,73.8973029 20.8973029,73 22,73 C23.1037344,73 24,73.8973029 24,75 C24,76.1026971 23.1037344,77 22,77" id="Fill-71" />
                                        <path d="M42,77 C40.8962656,77 40,76.1026971 40,75 C40,73.8973029 40.8962656,73 42,73 C43.1016598,73 44,73.8973029 44,75 C44,76.1026971 43.1016598,77 42,77" id="Fill-72" />
                                        <path d="M62.0005188,77 C60.8964981,77 60,76.1026971 60,75 C60,73.8973029 60.8964981,73 62.0005188,73 C63.1024643,73 64,73.8973029 64,75 C64,76.1026971 63.1024643,77 62.0005188,77" id="Fill-73" />
                                        <path d="M81.9984436,77 C80.8964981,77 80,76.1026971 80,75 C80,73.8973029 80.8964981,73 81.9984436,73 C83.1024643,73 84,73.8973029 84,75 C84,76.1026971 83.1024643,77 81.9984436,77" id="Fill-74" />
                                        <path d="M102,77 C100.89834,77 100,76.1026971 100,75 C100,73.8973029 100.89834,73 102,73 C103.103734,73 104,73.8973029 104,75 C104,76.1026971 103.103734,77 102,77" id="Fill-75" />
                                        <path d="M1.99948119,95 C0.897535668,95 0,94.1024643 0,92.9994812 C0,91.8964981 0.897535668,91 1.99948119,91 C3.10350195,91 4,91.8964981 4,92.9994812 C4,94.1024643 3.10350195,95 1.99948119,95" id="Fill-76" />
                                        <path d="M22,95 C20.8973029,95 20,94.1024643 20,92.9994812 C20,91.8964981 20.8973029,91 22,91 C23.1037344,91 24,91.8964981 24,92.9994812 C24,94.1024643 23.1037344,95 22,95" id="Fill-77" />
                                        <path d="M42,95 C40.8962656,95 40,94.1024643 40,92.9994812 C40,91.8964981 40.8962656,91 42,91 C43.1016598,91 44,91.8964981 44,92.9994812 C44,94.1024643 43.1016598,95 42,95" id="Fill-78" />
                                        <path d="M62.0005188,95 C60.8964981,95 60,94.1024643 60,92.9994812 C60,91.8964981 60.8964981,91 62.0005188,91 C63.1024643,91 64,91.8964981 64,92.9994812 C64,94.1024643 63.1024643,95 62.0005188,95" id="Fill-79" />
                                        <path d="M81.9984436,95 C80.8964981,95 80,94.1024643 80,92.9994812 C80,91.8964981 80.8964981,91 81.9984436,91 C83.1024643,91 84,91.8964981 84,92.9994812 C84,94.1024643 83.1024643,95 81.9984436,95" id="Fill-80" />
                                        <path d="M102,95 C100.89834,95 100,94.1024643 100,92.9994812 C100,91.8964981 100.89834,91 102,91 C103.103734,91 104,91.8964981 104,92.9994812 C104,94.1024643 103.103734,95 102,95" id="Fill-81" />
                                        <polyline id="Fill-82" points="75 87 13 26 75 26 75 87" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <svg className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" width="104px" height="95px" viewBox="0 0 104 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Work-in-Progress" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" opacity="0.122837612">
                                <g transform="translate(-206.000000, -596.000000)" fill="#FFFFFF">
                                    <g id="Group-5" transform="translate(258.000000, 643.500000) scale(-1, -1) translate(-258.000000, -643.500000) translate(206.000000, 596.000000)">
                                        <path d="M1.99948119,4 C0.897535668,4 0,3.10246433 0,1.99948119 C0,0.896498054 0.897535668,0 1.99948119,0 C3.10350195,0 4,0.896498054 4,1.99948119 C4,3.10246433 3.10350195,4 1.99948119,4" id="Fill-46" />
                                        <path d="M22,4 C20.8973029,4 20,3.10246433 20,1.99948119 C20,0.896498054 20.8973029,0 22,0 C23.1037344,0 24,0.896498054 24,1.99948119 C24,3.10246433 23.1037344,4 22,4" id="Fill-47" />
                                        <path d="M42,4 C40.8962656,4 40,3.10246433 40,1.99948119 C40,0.896498054 40.8962656,0 42,0 C43.1016598,0 44,0.896498054 44,1.99948119 C44,3.10246433 43.1016598,4 42,4" id="Fill-48" />
                                        <path d="M62.0005188,4 C60.8964981,4 60,3.10246433 60,1.99948119 C60,0.896498054 60.8964981,0 62.0005188,0 C63.1024643,0 64,0.896498054 64,1.99948119 C64,3.10246433 63.1024643,4 62.0005188,4" id="Fill-49" />
                                        <path d="M81.9984436,4 C80.8964981,4 80,3.10246433 80,1.99948119 C80,0.896498054 80.8964981,0 81.9984436,0 C83.1024643,0 84,0.896498054 84,1.99948119 C84,3.10246433 83.1024643,4 81.9984436,4" id="Fill-50" />
                                        <path d="M102,4 C100.89834,4 100,3.10246433 100,1.99948119 C100,0.896498054 100.89834,0 102,0 C103.103734,0 104,0.896498054 104,1.99948119 C104,3.10246433 103.103734,4 102,4" id="Fill-51" />
                                        <path d="M1.99948119,22 C0.897535668,22 0,21.1024643 0,19.9994812 C0,18.8964981 0.897535668,18 1.99948119,18 C3.10350195,18 4,18.8964981 4,19.9994812 C4,21.1024643 3.10350195,22 1.99948119,22" id="Fill-52" />
                                        <path d="M22,22 C20.8973029,22 20,21.1024643 20,19.9994812 C20,18.8964981 20.8973029,18 22,18 C23.1037344,18 24,18.8964981 24,19.9994812 C24,21.1024643 23.1037344,22 22,22" id="Fill-53" />
                                        <path d="M42,22 C40.8962656,22 40,21.1024643 40,19.9994812 C40,18.8964981 40.8962656,18 42,18 C43.1016598,18 44,18.8964981 44,19.9994812 C44,21.1024643 43.1016598,22 42,22" id="Fill-54" />
                                        <path d="M62.0005188,22 C60.8964981,22 60,21.1024643 60,19.9994812 C60,18.8964981 60.8964981,18 62.0005188,18 C63.1024643,18 64,18.8964981 64,19.9994812 C64,21.1024643 63.1024643,22 62.0005188,22" id="Fill-55" />
                                        <path d="M81.9984436,22 C80.8964981,22 80,21.1024643 80,19.9994812 C80,18.8964981 80.8964981,18 81.9984436,18 C83.1024643,18 84,18.8964981 84,19.9994812 C84,21.1024643 83.1024643,22 81.9984436,22" id="Fill-56" />
                                        <path d="M102,22 C100.89834,22 100,21.1024643 100,19.9994812 C100,18.8964981 100.89834,18 102,18 C103.103734,18 104,18.8964981 104,19.9994812 C104,21.1024643 103.103734,22 102,22" id="Fill-57" />
                                        <path d="M1.99948119,40 C0.897535668,40 0,39.1026971 0,38 C0,36.8973029 0.897535668,36 1.99948119,36 C3.10350195,36 4,36.8973029 4,38 C4,39.1026971 3.10350195,40 1.99948119,40" id="Fill-58" />
                                        <path d="M22,40 C20.8973029,40 20,39.1026971 20,38 C20,36.8973029 20.8973029,36 22,36 C23.1037344,36 24,36.8973029 24,38 C24,39.1026971 23.1037344,40 22,40" id="Fill-59" />
                                        <path d="M42,40 C40.8962656,40 40,39.1026971 40,38 C40,36.8973029 40.8962656,36 42,36 C43.1016598,36 44,36.8973029 44,38 C44,39.1026971 43.1016598,40 42,40" id="Fill-60" />
                                        <path d="M62.0005188,40 C60.8964981,40 60,39.1026971 60,38 C60,36.8973029 60.8964981,36 62.0005188,36 C63.1024643,36 64,36.8973029 64,38 C64,39.1026971 63.1024643,40 62.0005188,40" id="Fill-61" />
                                        <path d="M81.9984436,40 C80.8964981,40 80,39.1026971 80,38 C80,36.8973029 80.8964981,36 81.9984436,36 C83.1024643,36 84,36.8973029 84,38 C84,39.1026971 83.1024643,40 81.9984436,40" id="Fill-62" />
                                        <path d="M102,40 C100.89834,40 100,39.1026971 100,38 C100,36.8973029 100.89834,36 102,36 C103.103734,36 104,36.8973029 104,38 C104,39.1026971 103.103734,40 102,40" id="Fill-63" />
                                        <path d="M1.99948119,59 C0.897535668,59 0,58.1026971 0,57 C0,55.8973029 0.897535668,55 1.99948119,55 C3.10350195,55 4,55.8973029 4,57 C4,58.1026971 3.10350195,59 1.99948119,59" id="Fill-64" />
                                        <path d="M22,59 C20.8973029,59 20,58.1026971 20,57 C20,55.8973029 20.8973029,55 22,55 C23.1037344,55 24,55.8973029 24,57 C24,58.1026971 23.1037344,59 22,59" id="Fill-65" />
                                        <path d="M42,59 C40.8962656,59 40,58.1026971 40,57 C40,55.8973029 40.8962656,55 42,55 C43.1016598,55 44,55.8973029 44,57 C44,58.1026971 43.1016598,59 42,59" id="Fill-66" />
                                        <path d="M62.0005188,59 C60.8964981,59 60,58.1026971 60,57 C60,55.8973029 60.8964981,55 62.0005188,55 C63.1024643,55 64,55.8973029 64,57 C64,58.1026971 63.1024643,59 62.0005188,59" id="Fill-67" />
                                        <path d="M81.9984436,59 C80.8964981,59 80,58.1026971 80,57 C80,55.8973029 80.8964981,55 81.9984436,55 C83.1024643,55 84,55.8973029 84,57 C84,58.1026971 83.1024643,59 81.9984436,59" id="Fill-68" />
                                        <path d="M102,59 C100.89834,59 100,58.1026971 100,57 C100,55.8973029 100.89834,55 102,55 C103.103734,55 104,55.8973029 104,57 C104,58.1026971 103.103734,59 102,59" id="Fill-69" />
                                        <path d="M1.99948119,77 C0.897535668,77 0,76.1026971 0,75 C0,73.8973029 0.897535668,73 1.99948119,73 C3.10350195,73 4,73.8973029 4,75 C4,76.1026971 3.10350195,77 1.99948119,77" id="Fill-70" />
                                        <path d="M22,77 C20.8973029,77 20,76.1026971 20,75 C20,73.8973029 20.8973029,73 22,73 C23.1037344,73 24,73.8973029 24,75 C24,76.1026971 23.1037344,77 22,77" id="Fill-71" />
                                        <path d="M42,77 C40.8962656,77 40,76.1026971 40,75 C40,73.8973029 40.8962656,73 42,73 C43.1016598,73 44,73.8973029 44,75 C44,76.1026971 43.1016598,77 42,77" id="Fill-72" />
                                        <path d="M62.0005188,77 C60.8964981,77 60,76.1026971 60,75 C60,73.8973029 60.8964981,73 62.0005188,73 C63.1024643,73 64,73.8973029 64,75 C64,76.1026971 63.1024643,77 62.0005188,77" id="Fill-73" />
                                        <path d="M81.9984436,77 C80.8964981,77 80,76.1026971 80,75 C80,73.8973029 80.8964981,73 81.9984436,73 C83.1024643,73 84,73.8973029 84,75 C84,76.1026971 83.1024643,77 81.9984436,77" id="Fill-74" />
                                        <path d="M102,77 C100.89834,77 100,76.1026971 100,75 C100,73.8973029 100.89834,73 102,73 C103.103734,73 104,73.8973029 104,75 C104,76.1026971 103.103734,77 102,77" id="Fill-75" />
                                        <path d="M1.99948119,95 C0.897535668,95 0,94.1024643 0,92.9994812 C0,91.8964981 0.897535668,91 1.99948119,91 C3.10350195,91 4,91.8964981 4,92.9994812 C4,94.1024643 3.10350195,95 1.99948119,95" id="Fill-76" />
                                        <path d="M22,95 C20.8973029,95 20,94.1024643 20,92.9994812 C20,91.8964981 20.8973029,91 22,91 C23.1037344,91 24,91.8964981 24,92.9994812 C24,94.1024643 23.1037344,95 22,95" id="Fill-77" />
                                        <path d="M42,95 C40.8962656,95 40,94.1024643 40,92.9994812 C40,91.8964981 40.8962656,91 42,91 C43.1016598,91 44,91.8964981 44,92.9994812 C44,94.1024643 43.1016598,95 42,95" id="Fill-78" />
                                        <path d="M62.0005188,95 C60.8964981,95 60,94.1024643 60,92.9994812 C60,91.8964981 60.8964981,91 62.0005188,91 C63.1024643,91 64,91.8964981 64,92.9994812 C64,94.1024643 63.1024643,95 62.0005188,95" id="Fill-79" />
                                        <path d="M81.9984436,95 C80.8964981,95 80,94.1024643 80,92.9994812 C80,91.8964981 80.8964981,91 81.9984436,91 C83.1024643,91 84,91.8964981 84,92.9994812 C84,94.1024643 83.1024643,95 81.9984436,95" id="Fill-80" />
                                        <path d="M102,95 C100.89834,95 100,94.1024643 100,92.9994812 C100,91.8964981 100.89834,91 102,91 C103.103734,91 104,91.8964981 104,92.9994812 C104,94.1024643 103.103734,95 102,95" id="Fill-81" />
                                        <polyline id="Fill-82" points="75 87 13 26 75 26 75 87" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">The Freedom to Create the Pages You Want</h1>
                        </div>
                        <div className="flex justify-center items-center mb-10 sm:mb-20">
                            <div>
                                <button className="hover:text-white hover:bg-transparent hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none  rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Get Started</button>
                                <button className="hover:bg-white hover:text-indigo-600 hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
                        <div className="relative sm:w-2/3 w-11/12">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/hero/h_2.png" alt className="absolute" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;


      </>
    )
}

export default Hero
