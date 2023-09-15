<template>
   <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
               <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                  type="button"
                  class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                     <path clip-rule="evenodd" fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                     </path>
                  </svg>
               </button>
               <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                  <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Coesa
                     Eksu</span>
               </a>
            </div>
            <div class="flex items-center">
               <div class="flex items-center ml-3">
                  <div>
                     <button type="button"
                        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full"
                           src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                     </button>
                  </div>
                  <div
                     class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                     id="dropdown-user">
                     <div class="px-4 py-3" role="none">
                        <p class="text-sm text-gray-900 dark:text-white" role="none">
                           Neil Sims
                        </p>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                           neil.sims@flowbite.com
                        </p>
                     </div>
                     <ul class="py-1" role="none">
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Dashboard</a>
                        </li>
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Settings</a>
                        </li>
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Earnings</a>
                        </li>
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Sign out</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </nav>

   <aside id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
         <ul class="space-y-2 font-medium">
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                     <path
                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                     <path
                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span class="ml-3">Dashboard</span>
               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                     <path
                        d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                  <span
                     class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                     <path
                        d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  <span
                     class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                     <path
                        d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                     <path
                        d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                     <path
                        d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                     <path
                        d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
               </a>
            </li>
         </ul>
      </div>
   </aside>

   <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg  mt-14">
         <div class="grid grid-cols-1 md:grid-cols-4 h-20" style="height: 80px !important">
            <div class="col-span-3 md:mx-10 head">
               <div class="group">
                  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                     <g>
                        <path
                           d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                        </path>
                     </g>
                  </svg>
                  <input placeholder="Search" type="search" class="input">
               </div>

               <div class="app mt-4">
                  <h3 class="text-gray-500 font-extrabold md:text-3xl text-2xl"></h3>
                  <div class="grid grid-cols-3 my-4 gap-4">
                     <div class="col dark:bg-gray-900 px-3 py-5 text-white rounded lg:flex justify-between">
                        <div class="lg:flex">
                           <div class="flex justify-center md:block">
                              <Icon icon="dashicons:welcome-learn-more" width="25" class="mt-1 md:mr-1" />
                           </div>
                           <h4 class="font-bold text-center md:text-left text-sm md:text-2xl">Courses</h4>
                        </div>

                        <div class="bg-green-900 text-white rounded-full  text-center mt-1 hidden md:hidden lg:block"
                           style="width: 25px; height: 25px;">
                           1
                        </div>
                     </div>

                     <div class="col dark:bg-gray-900 px-3 py-5 text-white rounded md:flex justify-between">
                        <div class="md:flex">
                           <div class="flex justify-center md:block"> <Icon icon="mingcute:task-fill" width="25" class="mt-1 lg:mr-1" /></div>
                          
                           <h4 class="font-bold md:text-2xl text-center">Tasks</h4>
                        </div>

                        <div class="bg-green-900 text-white rounded-full  text-center mt-1  hidden md:hidden lg:block"
                           style="width: 25px; height: 25px;">
                           10
                        </div>
                     </div>


                     <div class="col dark:bg-gray-900 px-3 py-5 text-white rounded lg:flex justify-between">
                        <div class="lg:flex">
                           <div class="flex justify-center md:block">
                              <Icon icon="ion:people" width="25" class="mt-1 mr-1" />
                           </div>
                          
                           <h4 class="font-bold lg:text-2xl ">Followers</h4>
                        </div>

                        <div class="bg-green-900 text-white rounded-full  text-center mt-1  hidden md:hidden lg:block"
                           style="width: 25px; height: 25px;">
                           1
                        </div>
                     </div>

                  </div>
               </div>

               <div class="ad my-5 p-0 px-5 bg-blue-900 rounded">
                  <div class="grid grid-cols-2">
                     <div class=" md:pt-20 pt-5">
                        <h3 class="md:text-4xl text-lg font-extrabold text-white">Coesa Chat Feature Coming Soon</h3>
                     </div>

                     <div class="">
                        <img src="../../assets/img/ad-1.png" class="">
                     </div>
                  </div>
               </div>

               <div class="app my-10">
                  <h3 class="text-gray-900 font-extrabold md:text-3xl text-2xl">Coesa Tools</h3>
                  <div class="grid grid-cols-3 my-4 gap-4">
                     <div class="col dark:bg-purple-900 px-3 py-5 text-white rounded">
                        <div class=" text-center">
                           <div class="justify-center hidden md:flex lg:flex">
                              <Icon icon="carbon:calculator-check" width="75"
                                 class="mt-1 mr-1 text-center rounded-full bg-purple-500 p-4" />
                           </div>

                           <div class="flex justify-center md:hidden lg:hidden">
                              <Icon icon="carbon:calculator-check" width="45"
                                 class="mt-1 mr-1 text-center rounded-full bg-purple-500 p-2" />
                           </div>

                           <h4 class="font-bold md:text-2xl text-sm mt-3">GPA Calculator</h4>
                        </div>
                     </div>

                     <div class="col dark:bg-blue-900 px-3 py-5 text-white rounded">
                        <div class=" text-center">
                           <div class=" justify-center  hidden md:flex lg:flex">
                              <Icon icon="eos-icons:ai" width="75"
                                 class="mt-1 mr-1 text-center rounded-full bg-blue-500 p-4" />
                           </div>

                           <div class="flex justify-center md:hidden lg:hidden">
                              <Icon icon="eos-icons:ai" width="45"
                                 class="mt-1 mr-1 text-center rounded-full bg-blue-500 p-2" />
                           </div>

                           <h4 class="font-bold md:text-2xl text-sm mt-3">AI Writer</h4>
                        </div>
                     </div>


                     <div class="col dark:bg-yellow-900 px-3 py-5 text-white rounded">
                        <div class=" text-center">
                           <div class=" justify-center hidden md:flex lg:flex">
                              <Icon icon="ph:note-fill" width="75"
                                 class="mt-1 mr-1 text-center rounded-full bg-yellow-500 p-4" />
                           </div>

                           <div class="flex justify-center md:hidden lg:hidden">
                              <Icon icon="ph:note-fill" width="45"
                                 class="mt-1 mr-1 text-center rounded-full bg-yellow-500 p-2" />
                           </div>

                           <h4 class="font-bold md:text-2xl text-sm mt-3">Note</h4>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="app my-10">
                  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                     <div class="col">
                        <h3 class="text-gray-900 font-extrabold md:text-3xl text-2xl">New Courses</h3>
                        <div class="courses my-5">
                           <div class="w-full max-w-md p-0 bg-white rounded-lg">

                              <div class="flow-root">
                                 <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li class="py-3 sm:py-4 shadow rounded p-3">
                                       <div class="flex items-center space-x-4">
                                          <div class="flex-shrink-0">
                                             <img class="w-20 object-cover h-20 rounded" src="../../assets/img/sign-up.jpg"
                                                alt="Neil image">
                                          </div>
                                          <div class="flex-1 min-w-0">
                                             <p class="text-lg font-medium text-gray-900 truncate">
                                                Coesa Award Night
                                             </p>
                                             <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, eligendi?
                                             </p>
                                          </div>
                                          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                             visit
                                          </div>
                                       </div>
                                    </li>


                                 </ul>
                              </div>
                           </div>

                        </div>
                     </div>


                     <div class="col">
                        <h3 class="text-gray-900 font-extrabold md:text-3xl text-2xl">Create Task</h3>
                        <div class="courses my-5">
                           <div class="w-full max-w-md p-0 bg-white rounded-lg">

                              <div class="flow-root">
                                 <div class="group-2 mb-5">
                                    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                                       <g>
                                          <path
                                             d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                          </path>
                                       </g>
                                    </svg>
                                    <input placeholder="Search" type="search" class="input">

                                 </div>



                                 <div class="flex">
                                    <div class="flex items-center h-5">
                                       <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox"
                                          value=""
                                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    </div>
                                    <div class="ml-2 text-sm">
                                       <label for="helper-checkbox"
                                          class="font-medium text-gray-900 dark:text-gray-700">Free shipping via
                                          Flowbite</label>
                                       <p id="helper-checkbox-text"
                                          class="text-xs font-normal text-gray-500 dark:text-gray-500">For orders shipped
                                          from $25 in books or $29 in other categories</p>
                                    </div>
                                 </div>

                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

               </div>

               <footerVue />

            </div>


            <div class="col-span-1">
               <div class="events lg:fixed  bg-gray-100 p-3 rounded-lg">
                  <div class="w-full max-w-md p-0  ">
                     <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 ">Upcoming Events</h5>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                           View all
                        </a>
                     </div>
                     <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                           <li class="py-3 sm:py-4">
                              <div class="flex items-center space-x-4">
                                 <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded" src="../../assets/img/sign-up.jpg" alt="Neil image">
                                 </div>
                                 <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                       Coesa Award Night
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                       email@windster.com
                                    </p>
                                 </div>
                                 <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                    visit
                                 </div>
                              </div>
                           </li>

                        </ul>
                     </div>
                  </div>

               </div>




               <div class="events lg:fixed lg:bottom-0 mt-10 mb-20  bg-gray-100 p-3 rounded-lg">
                  <div class="w-full max-w-md p-0 ">
                     <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 ">Notifications</h5>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                           View all
                        </a>
                     </div>
                     <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                           <li class="py-3 sm:py-4">
                              <div class="flex items-center space-x-4">
                                 <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded" src="../../assets/img/sign-up.jpg" alt="Neil image">
                                 </div>
                                 <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                       Coesa Award Night
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                       email@windster.com
                                    </p>
                                 </div>
                                 <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                    visit
                                 </div>
                              </div>
                           </li>

                        </ul>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>

     
   </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import footerVue from '../../components/utilities/accountComponents/footer.vue'

export default {
   components: {
      Icon,
      footerVue
   }
}
</script>

<style scoped>
.group {
   display: flex;
   line-height: 28px;
   align-items: center;
   position: relative;
   max-width: 50%;
}

@media screen and (max-width: 780px) {
   .group {
   display: flex;
   line-height: 28px;
   align-items: center;
   position: relative;
   max-width: 100%;
}
}

.group-2 {
   display: flex;
   line-height: 28px;
   align-items: center;
   position: relative;
   max-width: 100%;
}

.input {
   width: 100%;
   height: 40px;
   line-height: 28px;
   padding: 0 1rem;
   padding-left: 2.5rem;
   border: 2px solid transparent;
   border-radius: 8px;
   outline: none;
   background-color: #f3f3f4;
   color: #0d0c22;
   transition: .3s ease;
}

.input::placeholder {
   color: #9e9ea7;
}

.input:focus,
input:hover {
   outline: none;
   border-color: rgba(234, 76, 137, 0.4);
   background-color: #fff;
   box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
   position: absolute;
   left: 1rem;
   fill: #9e9ea7;
   width: 1rem;
   height: 1rem;
}</style>