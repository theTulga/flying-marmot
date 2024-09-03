import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlignJustify,
  BriefcaseBusiness,
  PlusIcon,
  User,
  UserIcon,
  X,
} from "lucide-react";
import { useAuth } from "../auth";
const SideNav = ({
  sideNavOpen,
  setSideNavOpen,
  toggleSideNav,
}: {
  sideNavOpen: boolean;
  setSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideNav: () => void;
}) => {
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const { isAuthenticated, user } = useAuth();
  console.log(user, "user");
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        sideNavOpen
      ) {
        setSideNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideNavOpen]);
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 w-5/6 max-w-md z-50 transition-transform duration-300 ease-in-out border-l border-gray-200 ${sideNavOpen ? "translate-x-0" : "translate-x-full"}`}
      ref={sidebarRef}
    >
      <div
        className="fixed inset-0 bg-purple-800 opacity-70"
        onClick={toggleSideNav}
      />
      <nav className="relative flex flex-col pt-12 pb-6 px-8 w-full h-full bg-white overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="stolen-logo-new-incoming.png"
              className="h-16 w-24 text-primary"
            />
            <span className="text-2xl font-bold">Mongol Hub</span>
          </div>
          <button onClick={toggleSideNav}>
            <X />
          </button>
        </div>
        <div className="py-12 mb-auto">
          <ul className="flex-col">
            <li className="mb-3">
              <Link
                className="group mr-6 inline-flex items-center text-base"
                to="/profile"
              >
                <UserIcon className="mr-2" />
                {isAuthenticated ? (
                  <span className="font-semibold text-rhino-700">
                    {user?.email}
                  </span>
                ) : (
                  <span className="font-semibold text-rhino-700">Login</span>
                )}
              </Link>
            </li>
            <li className="mb-3">
              <Link
                className="group mr-6 inline-flex items-center text-base"
                to="/my-business"
              >
                <BriefcaseBusiness className="mr-2" />
                <span className="font-semibold text-rhino-700">
                  My business
                </span>
              </Link>
            </li>
            <li className="mb-12">
              <a
                className="inline-flex items-center text-base text-purple-400 hover:text-purple-200"
                href="#"
              >
                <span className="mr-2 text-purple-400">
                  <svg
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99992 15.3333C7.36811 15.3333 7.66658 15.0349 7.66658 14.6667C7.66658 14.2985 7.36811 14 6.99992 14C6.63173 14 6.33325 14.2985 6.33325 14.6667C6.33325 15.0349 6.63173 15.3333 6.99992 15.3333Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.3334 15.3333C14.7016 15.3333 15.0001 15.0349 15.0001 14.6667C15.0001 14.2985 14.7016 14 14.3334 14C13.9652 14 13.6667 14.2985 13.6667 14.6667C13.6667 15.0349 13.9652 15.3333 14.3334 15.3333Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.66675 1.33334H4.33341L6.12008 10.26C6.18104 10.5669 6.34802 10.8426 6.59178 11.0389C6.83554 11.2351 7.14055 11.3393 7.45341 11.3333H13.9334C14.2463 11.3393 14.5513 11.2351 14.7951 11.0389C15.0388 10.8426 15.2058 10.5669 15.2667 10.26L16.3334 4.66667H5.00008"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-semibold text-rhino-700">Cart</span>
              </a>
            </li>
            <li className="mb-4">
              <a
                className="flex items-center text-base font-bold text-rhino-700"
                href="#"
              >
                <span className="mr-2">Home</span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.47315 10.36L12.2398 6.58667C12.3023 6.52469 12.3519 6.45096 12.3857 6.36972C12.4196 6.28848 12.437 6.20134 12.437 6.11333C12.437 6.02533 12.4196 5.93819 12.3857 5.85695C12.3519 5.77571 12.3023 5.70198 12.2398"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-4">
              <a
                className="flex items-center text-base font-bold text-rhino-700"
                href="#"
              >
                <span className="mr-2">Pages</span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.47315 10.36L12.2398 6.58667C12.3023 6.52469 12.3519 6.45096 12.3857 6.36972C12.4196 6.28848 12.437 6.20134 12.437 6.11333C12.437 6.02533 12.4196 5.93819 12.3857 5.85695C12.3519 5.77571 12.3023 5.70198 12.2398 5.64C12.1149 5.51583 11.9459 5.44614 11.7698 5.44614C11.5937 5.44614 11.4247 5.51583 11.2998 5.64L7.96648 8.94L4.66648 5.64C4.54157 5.51583 4.3726 5.44614 4.19648 5.44614C4.02036 5.44614 3.85139 5.51583 3.72648 5.64C3.66349 5.70174 3.61337 5.77537 3.57904 5.85662C3.54471 5.93787 3.52685 6.02513 3.52648 6.11333C3.52685 6.20154 3.54471 6.28879 3.57904 6.37004C3.61337 6.45129 3.66349 6.52492 3.72648 6.58667L7.49315 10.36C7.55557 10.4277 7.63134 10.4817 7.71568 10.5186C7.80001 10.5556 7.89108 10.5746 7.98315 10.5746C8.07521 10.5746 8.16628 10.5556 8.25062 10.5186C8.33495 10.4817 8.41072 10.4277 8.47315 10.36Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-4">
              <a
                className="flex items-center text-base font-bold text-rhino-700"
                href="#"
              >
                Products
              </a>
            </li>
            <li className="mb-4">
              <a
                className="flex items-center text-base font-bold text-rhino-700"
                href="#"
              >
                Blog
              </a>
            </li>
            <li className="mb-4">
              <a
                className="flex items-center text-base font-bold text-rhino-700"
                href="#"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                className="flex items-center text-base font-bold text-rhino-700 hover:text-rhino-400"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-center text-sm text-coolGray-400">
            Coleos Shuffle 2023
          </p>
        </div>
      </nav>
    </div>
  );
};

export default function IndexSectionNavigations3() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };
  return (
    <React.Fragment>
      <section>
        <nav className="relative flex items-center justify-between h-20 py-4 px-6 bg-white">
          <Link to="/" className="flex items-center justify-center">
            <img
              src="stolen-logo-new-incoming.png"
              className="h-16 w-24 text-primary"
            />
          </Link>
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link
              to="/for-sale"
              className="inline-block mr-10 font-base font-medium text-rhino-700 hover:text-rhino-400"
              activeProps={{ className: "text-rhino-400 font-bold" }}
            >
              For Sale
            </Link>
            <Link
              to="/housing"
              className="inline-block mr-10 font-base font-medium text-rhino-700 hover:text-rhino-400"
              activeProps={{ className: "text-rhino-400 font-bold" }}
            >
              Housing
            </Link>
            <Link
              to="/jobs"
              className="inline-block mr-10 font-base font-medium text-rhino-700 hover:text-rhino-400"
              activeProps={{ className: "text-rhino-400 font-bold" }}
            >
              Jobs
            </Link>
            <Link
              to="/services"
              className="inline-block mr-10 font-base font-medium text-rhino-700 hover:text-rhino-400"
              activeProps={{ className: "text-rhino-400 font-bold" }}
            >
              Services
            </Link>
            <Link
              to="/businesses"
              className="inline-block font-base font-medium text-rhino-700 hover:text-rhino-400"
              activeProps={{ className: "text-rhino-400 font-bold" }}
            >
              Businesses
            </Link>
          </div>
          <div className="flex pl-6 items-center">
            <Link
              to="/post"
              className="inline-block mr-10 text-coolGray-400 hover:text-coolGray-600"
            >
              <PlusIcon className="h-6 w-6" />
            </Link>
            <Link
              to="/profile"
              className="inline-block mr-10 text-coolGray-400 hover:text-coolGray-600"
            >
              <UserIcon className="h-6 w-6" />
            </Link>
            <button
              className="text-coolGray-400 hover:text-coolGray-600"
              onClick={toggleSideNav}
            >
              <AlignJustify className="h-6 w-6" />
            </button>
          </div>
        </nav>
        <SideNav
          sideNavOpen={sideNavOpen}
          setSideNavOpen={setSideNavOpen}
          toggleSideNav={toggleSideNav}
        />
      </section>
    </React.Fragment>
  );
}
