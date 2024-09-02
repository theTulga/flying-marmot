import React from 'react';

export default function SignupSectionSignIn1() {
    return (
        <React.Fragment>
            <>
                <section className="overflow-hidden py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 p-4">
        <div className="bg-purple-100 px-4 md:px-8 py-10 rounded-lg">
          <form action>
            <h2 className="text-rhino-700 text-2xl font-semibold mb-8 font-heading">Login</h2>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-coolGray-700 text-sm font-medium" htmlFor="textInput1">E-Mail Address</label>
              <input className="py-3 px-4 rounded-sm border border-coolGray-200 outline-none focus:ring-1 ring-indigo-400" id="textInput1" type="text" placeholder="example @ gmail.com" />
            </div>
            <div className="flex flex-col gap-1 mb-8">
              <label className="text-coolGray-700 text-sm font-medium" htmlFor="textInput2">Password</label>
              <div className="py-3 px-4 rounded-sm border border-coolGray-200 flex bg-white">
                <input className="flex-1 outline-none" id="textInput2" type="text" placeholder="Password" />
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M4 5.5C4 4.5335 4.7835 3.75 5.75 3.75H18.75C19.7165 3.75 20.5 4.5335 20.5 5.5V6.5C20.5 6.91421 20.1642 7.25 19.75 7.25C19.3358 7.25 19 6.91421 19 6.5V5.5C19 5.36193 18.8881 5.25 18.75 5.25H5.75C5.61193 5.25 5.5 5.36193 5.5 5.5V12.5C5.5 12.6381 5.61193 12.75 5.75 12.75H9.25C9.66421 12.75 10 13.0858 10 13.5C10 13.9142 9.66421 14.25 9.25 14.25H5.75C4.7835 14.25 4 13.4665 4 12.5V5.5Z" fill="#252E4A" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 15.5C11 14.5335 11.7835 13.75 12.75 13.75H13V12.5C13 10.9812 14.2312 9.75 15.75 9.75C17.2688 9.75 18.5 10.9812 18.5 12.5V13.75H18.75C19.7165 13.75 20.5 14.5335 20.5 15.5V18.5C20.5 19.4665 19.7165 20.25 18.75 20.25H12.75C11.7835 20.25 11 19.4665 11 18.5V15.5ZM17 13.75V12.5C17 11.8096 16.4404 11.25 15.75 11.25C15.0596 11.25 14.5 11.8096 14.5 12.5V13.75H17ZM12.75 15.25C12.6119 15.25 12.5 15.3619 12.5 15.5V18.5C12.5 18.6381 12.6119 18.75 12.75 18.75H18.75C18.8881 18.75 19 18.6381 19 18.5V15.5C19 15.3619 18.8881 15.25 18.75 15.25H12.75Z" fill="#252E4A" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <input className="custom-checkbox-1 opacity-0 absolute z-10 h-5 w-5 top-0 left-0" id="checkbox1" type="checkbox" defaultChecked />
                <div className="border border-coolGray-200 w-5 h-5 flex justify-center items-center rounded-sm bg-white">
                  <svg className="hidden" width={10} height={7} viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.76764 0.22597C9.45824 -0.0754185 8.95582 -0.0752285 8.64601 0.22597L3.59787 5.13702L1.35419 2.95437C1.04438 2.65298 0.542174 2.65298 0.23236 2.95437C-0.0774534 3.25576 -0.0774534 3.74431 0.23236 4.0457L3.03684 6.77391C3.19165 6.92451 3.39464 7 3.59765 7C3.80067 7 4.00386 6.9247 4.15867 6.77391L9.76764 1.31727C10.0775 1.01609 10.0775 0.52734 9.76764 0.22597Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <label className="block text-rhino-800 text-sm" htmlFor="checkbox1">By using this form you agree with the storage and handling of your data by this website.</label>
            </div>
            <div className="flex justify-between flex-wrap gap-4"><a className="py-3 px-4 bg-purple-500 rounded-sm text-sm text-white font-medium hover:bg-purple-600 transition duration-200" href="#">Login</a><a className="py-3 px-4 bg-white rounded-sm text-sm text-coolGray-700 font-medium hover:bg-purple-500 hover:text-white transition duration-200 shadow-md" href="#">Forgot password?</a></div>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <div className="bg-purple-100 px-4 md:px-8 py-10 rounded-lg">
          <form action>
            <h2 className="text-rhino-700 text-2xl font-semibold mb-8 font-heading">Register</h2>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-coolGray-700 text-sm font-medium" htmlFor="textInput3">First Name</label>
              <input className="py-3 px-4 rounded-sm border border-coolGray-200 outline-none focus:ring-1 ring-indigo-400" id="textInput3" type="text" placeholder="Enter name" />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-coolGray-700 text-sm font-medium" htmlFor="textInput4">Last Name</label>
              <input className="py-3 px-4 rounded-sm border border-coolGray-200 outline-none focus:ring-1 ring-indigo-400" id="textInput4" type="text" placeholder="Enter" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <input className="custom-checkbox-1 opacity-0 absolute z-10 h-5 w-5 top-0 left-0" id="checkbox2" type="checkbox" defaultChecked />
                <div className="border border-coolGray-200 w-5 h-5 flex justify-center items-center rounded-sm bg-white">
                  <svg className="hidden" width={10} height={7} viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.76764 0.22597C9.45824 -0.0754185 8.95582 -0.0752285 8.64601 0.22597L3.59787 5.13702L1.35419 2.95437C1.04438 2.65298 0.542174 2.65298 0.23236 2.95437C-0.0774534 3.25576 -0.0774534 3.74431 0.23236 4.0457L3.03684 6.77391C3.19165 6.92451 3.39464 7 3.59765 7C3.80067 7 4.00386 6.9247 4.15867 6.77391L9.76764 1.31727C10.0775 1.01609 10.0775 0.52734 9.76764 0.22597Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <label className="block text-rhino-800 text-sm" htmlFor="checkbox2">Sign up for newsletter</label>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-coolGray-700 text-sm font-medium" htmlFor="textInput5">E-Mail Address</label>
              <input className="py-3 px-4 rounded-sm border border-coolGray-200 outline-none focus:ring-1 ring-indigo-400" id="textInput5" type="text" placeholder="example @ gmail.com" />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-coolGray-700 text-sm font-medium" htmlFor="textInput6">Password</label>
              <div className="py-3 px-4 rounded-sm border border-coolGray-200 flex bg-white">
                <input className="flex-1 outline-none" id="textInput6" type="password" placeholder="Password" />
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M4 5.5C4 4.5335 4.7835 3.75 5.75 3.75H18.75C19.7165 3.75 20.5 4.5335 20.5 5.5V6.5C20.5 6.91421 20.1642 7.25 19.75 7.25C19.3358 7.25 19 6.91421 19 6.5V5.5C19 5.36193 18.8881 5.25 18.75 5.25H5.75C5.61193 5.25 5.5 5.36193 5.5 5.5V12.5C5.5 12.6381 5.61193 12.75 5.75 12.75H9.25C9.66421 12.75 10 13.0858 10 13.5C10 13.9142 9.66421 14.25 9.25 14.25H5.75C4.7835 14.25 4 13.4665 4 12.5V5.5Z" fill="#252E4A" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 15.5C11 14.5335 11.7835 13.75 12.75 13.75H13V12.5C13 10.9812 14.2312 9.75 15.75 9.75C17.2688 9.75 18.5 10.9812 18.5 12.5V13.75H18.75C19.7165 13.75 20.5 14.5335 20.5 15.5V18.5C20.5 19.4665 19.7165 20.25 18.75 20.25H12.75C11.7835 20.25 11 19.4665 11 18.5V15.5ZM17 13.75V12.5C17 11.8096 16.4404 11.25 15.75 11.25C15.0596 11.25 14.5 11.8096 14.5 12.5V13.75H17ZM12.75 15.25C12.6119 15.25 12.5 15.3619 12.5 15.5V18.5C12.5 18.6381 12.6119 18.75 12.75 18.75H18.75C18.8881 18.75 19 18.6381 19 18.5V15.5C19 15.3619 18.8881 15.25 18.75 15.25H12.75Z" fill="#252E4A" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-coolGray-700 text-sm font-medium" htmlFor="textInput7">Confirm password</label>
              <div className="py-3 px-4 rounded-sm border border-coolGray-200 flex bg-white">
                <input className="flex-1 outline-none" id="textInput7" type="password" placeholder="Password" />
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M4 5.5C4 4.5335 4.7835 3.75 5.75 3.75H18.75C19.7165 3.75 20.5 4.5335 20.5 5.5V6.5C20.5 6.91421 20.1642 7.25 19.75 7.25C19.3358 7.25 19 6.91421 19 6.5V5.5C19 5.36193 18.8881 5.25 18.75 5.25H5.75C5.61193 5.25 5.5 5.36193 5.5 5.5V12.5C5.5 12.6381 5.61193 12.75 5.75 12.75H9.25C9.66421 12.75 10 13.0858 10 13.5C10 13.9142 9.66421 14.25 9.25 14.25H5.75C4.7835 14.25 4 13.4665 4 12.5V5.5Z" fill="#252E4A" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 15.5C11 14.5335 11.7835 13.75 12.75 13.75H13V12.5C13 10.9812 14.2312 9.75 15.75 9.75C17.2688 9.75 18.5 10.9812 18.5 12.5V13.75H18.75C19.7165 13.75 20.5 14.5335 20.5 15.5V18.5C20.5 19.4665 19.7165 20.25 18.75 20.25H12.75C11.7835 20.25 11 19.4665 11 18.5V15.5ZM17 13.75V12.5C17 11.8096 16.4404 11.25 15.75 11.25C15.0596 11.25 14.5 11.8096 14.5 12.5V13.75H17ZM12.75 15.25C12.6119 15.25 12.5 15.3619 12.5 15.5V18.5C12.5 18.6381 12.6119 18.75 12.75 18.75H18.75C18.8881 18.75 19 18.6381 19 18.5V15.5C19 15.3619 18.8881 15.25 18.75 15.25H12.75Z" fill="#252E4A" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <input className="custom-checkbox-1 opacity-0 absolute z-10 h-5 w-5 top-0 left-0" id="checkbox3" type="checkbox" defaultChecked />
                <div className="border border-coolGray-200 w-5 h-5 flex justify-center items-center rounded-sm bg-white">
                  <svg className="hidden" width={10} height={7} viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.76764 0.22597C9.45824 -0.0754185 8.95582 -0.0752285 8.64601 0.22597L3.59787 5.13702L1.35419 2.95437C1.04438 2.65298 0.542174 2.65298 0.23236 2.95437C-0.0774534 3.25576 -0.0774534 3.74431 0.23236 4.0457L3.03684 6.77391C3.19165 6.92451 3.39464 7 3.59765 7C3.80067 7 4.00386 6.9247 4.15867 6.77391L9.76764 1.31727C10.0775 1.01609 10.0775 0.52734 9.76764 0.22597Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <label className="block text-rhino-800 text-sm" htmlFor="checkbox3">By using this form you agree with the storage and handling of your data by this website.</label>
            </div>
            <a className="w-full block text-center py-3 px-4 bg-purple-500 rounded-sm text-sm text-white font-medium hover:bg-purple-600 transition duration-200" href="#">Create Account</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

