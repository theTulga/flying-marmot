import React from 'react';

export default function IndexSectionNavigations2() {
    return (
        <React.Fragment>
            <>
                <section>
  <div className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
    <div className="fixed inset-0 bg-purple-800 opacity-70" />
    <nav className="relative flex flex-col pt-12 pb-6 px-8 w-full h-full bg-white overflow-y-auto">
      <div className="flex mb-12 items-center">
        <a className="inline-block mr-auto" href="#">
          <img className="h-8" src="coleos-assets/logos/logo-coleos-2.svg" alt />
        </a>
        <button>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="#252E4A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex w-full max-w-xs items-center px-6 border border-coolGray-200 rounded-full">
        <input className="h-12 w-full bg-transparent border-0 text-sm text-coolGray-500 placeholder-coolGray-500 outline-none" type="search" placeholder="Search..." />
        <button className="inline-block ml-auto text-coolGray-400 hover:text-rhino-500" type="submit">
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.33333 11.6667C9.27885 11.6667 11.6667 9.27885 11.6667 6.33333C11.6667 3.38782 9.27885 1 6.33333 1C3.38782 1 1 3.38782 1 6.33333C1 9.27885 3.38782 11.6667 6.33333 11.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.0001 13L10.1001 10.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="py-12 mb-auto">
        <ul className="flex-col">
          <li className="mb-3">
            <a className="group mr-6 inline-flex items-center text-base" href="#">
              <span className="mr-2 text-purple-400">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3334 13.3333V12C13.3334 11.2928 13.0525 10.6145 12.5524 10.1144C12.0523 9.61429 11.374 9.33334 10.6667 9.33334H5.33341C4.62617 9.33334 3.94789 9.61429 3.4478 10.1144C2.9477 10.6145 2.66675 11.2928 2.66675 12V13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.99992 6.66667C9.47268 6.66667 10.6666 5.47276 10.6666 4C10.6666 2.52724 9.47268 1.33334 7.99992 1.33334C6.52716 1.33334 5.33325 2.52724 5.33325 4C5.33325 5.47276 6.52716 6.66667 7.99992 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-semibold text-rhino-700">Login</span>
            </a>
          </li>
          <li className="mb-3">
            <a className="group mr-6 inline-flex items-center text-base" href="#">
              <span className="mr-2 text-purple-400">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1208_8162)">
                    <path d="M14.1941 3.07455C13.8536 2.73389 13.4493 2.46365 13.0043 2.27927C12.5594 2.0949 12.0824 2 11.6008 2C11.1191 2 10.6422 2.0949 10.1972 2.27927C9.75224 2.46365 9.34795 2.73389 9.00745 3.07455L8.30078 3.78122L7.59411 3.07455C6.90632 2.38676 5.97347 2.00036 5.00078 2.00036C4.02809 2.00036 3.09524 2.38676 2.40745 3.07455C1.71965 3.76235 1.33325 4.69519 1.33325 5.66788C1.33325 6.64057 1.71965 7.57342 2.40745 8.26122L3.11411 8.96788L8.30078 14.1545L13.4874 8.96788L14.1941 8.26122C14.5348 7.92071 14.805 7.51643 14.9894 7.07145C15.1738 6.62648 15.2687 6.14954 15.2687 5.66788C15.2687 5.18623 15.1738 4.70929 14.9894 4.26431C14.805 3.81934 14.5348 3.41505 14.1941 3.07455V3.07455Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </span>
              <span className="font-semibold text-rhino-700">Favorite</span>
            </a>
          </li>
          <li className="mb-12">
            <a className="inline-flex items-center text-base text-purple-400 hover:text-purple-200" href="#">
              <span className="mr-2 text-purple-400">
                <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99992 15.3333C7.36811 15.3333 7.66658 15.0349 7.66658 14.6667C7.66658 14.2985 7.36811 14 6.99992 14C6.63173 14 6.33325 14.2985 6.33325 14.6667C6.33325 15.0349 6.63173 15.3333 6.99992 15.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.3334 15.3333C14.7016 15.3333 15.0001 15.0349 15.0001 14.6667C15.0001 14.2985 14.7016 14 14.3334 14C13.9652 14 13.6667 14.2985 13.6667 14.6667C13.6667 15.0349 13.9652 15.3333 14.3334 15.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1.66675 1.33334H4.33341L6.12008 10.26C6.18104 10.5669 6.34802 10.8426 6.59178 11.0389C6.83554 11.2351 7.14055 11.3393 7.45341 11.3333H13.9334C14.2463 11.3393 14.5513 11.2351 14.7951 11.0389C15.0388 10.8426 15.2058 10.5669 15.2667 10.26L16.3334 4.66667H5.00008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-semibold text-rhino-700">Cart</span>
            </a>
          </li>
          <li className="mb-4">
            <a className="flex items-center text-base font-bold text-rhino-700" href="#">
              <span className="mr-2">Home</span>
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.47315 10.36L12.2398 6.58667C12.3023 6.52469 12.3519 6.45096 12.3857 6.36972C12.4196 6.28848 12.437 6.20134 12.437 6.11333C12.437 6.02533 12.4196 5.93819 12.3857 5.85695C12.3519 5.77571 12.3023 5.70198 12.2398 5.64C12.1149 5.51583 11.9459 5.44614 11.7698 5.44614C11.5937 5.44614 11.4247 5.51583 11.2998 5.64L7.96648 8.94L4.66648 5.64C4.54157 5.51583 4.3726 5.44614 4.19648 5.44614C4.02036 5.44614 3.85139 5.51583 3.72648 5.64C3.66349 5.70174 3.61337 5.77537 3.57904 5.85662C3.54471 5.93787 3.52685 6.02513 3.52648 6.11333C3.52685 6.20154 3.54471 6.28879 3.57904 6.37004C3.61337 6.45129 3.66349 6.52492 3.72648 6.58667L7.49315 10.36C7.55557 10.4277 7.63134 10.4817 7.71568 10.5186C7.80001 10.5556 7.89108 10.5746 7.98315 10.5746C8.07521 10.5746 8.16628 10.5556 8.25062 10.5186C8.33495 10.4817 8.41072 10.4277 8.47315 10.36Z" fill="currentColor" />
              </svg>
            </a>
          </li>
          <li className="mb-4">
            <a className="flex items-center text-base font-bold text-rhino-700" href="#">
              <span className="mr-2">Pages</span>
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.47315 10.36L12.2398 6.58667C12.3023 6.52469 12.3519 6.45096 12.3857 6.36972C12.4196 6.28848 12.437 6.20134 12.437 6.11333C12.437 6.02533 12.4196 5.93819 12.3857 5.85695C12.3519 5.77571 12.3023 5.70198 12.2398 5.64C12.1149 5.51583 11.9459 5.44614 11.7698 5.44614C11.5937 5.44614 11.4247 5.51583 11.2998 5.64L7.96648 8.94L4.66648 5.64C4.54157 5.51583 4.3726 5.44614 4.19648 5.44614C4.02036 5.44614 3.85139 5.51583 3.72648 5.64C3.66349 5.70174 3.61337 5.77537 3.57904 5.85662C3.54471 5.93787 3.52685 6.02513 3.52648 6.11333C3.52685 6.20154 3.54471 6.28879 3.57904 6.37004C3.61337 6.45129 3.66349 6.52492 3.72648 6.58667L7.49315 10.36C7.55557 10.4277 7.63134 10.4817 7.71568 10.5186C7.80001 10.5556 7.89108 10.5746 7.98315 10.5746C8.07521 10.5746 8.16628 10.5556 8.25062 10.5186C8.33495 10.4817 8.41072 10.4277 8.47315 10.36Z" fill="currentColor" />
              </svg>
            </a>
          </li>
          <li className="mb-4"><a className="flex items-center text-base font-bold text-rhino-700" href="#">Products</a></li>
          <li className="mb-4"><a className="flex items-center text-base font-bold text-rhino-700" href="#">Blog</a></li>
          <li className="mb-4"><a className="flex items-center text-base font-bold text-rhino-700" href="#">Shop</a></li>
          <li><a className="flex items-center text-base font-bold text-rhino-700 hover:text-rhino-400" href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <p className="text-center text-sm text-coolGray-400">Coleos Shuffle 2023</p>
      </div>
    </nav>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

