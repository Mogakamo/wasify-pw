import { signIn, signOut, useSession } from 'next-auth/client'

const Navbar = () => {
    const [ session, loading ] = useSession()

    return (
      <>
        {!session && (
          <>
            <header
              className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
                !top && "bg-white blur shadow-lg"
              }`}
            >
              <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                  {/* Site branding */}
                  <div className="flex-shrink-0 mr-4">
                    {/* Logo */}
                    <a href="/" className="block" aria-label="Cruip">
                      <img src="" a />
                    </a>
                  </div>

                  {/* Site navigation */}
                  <nav className="flex flex-grow">
                    <ul className="flex flex-grow justify-end flex-wrap items-center">
                      <li>
                        <Link
                          to="/signin"
                          className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                        >
                          Sign in
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/signup"
                          className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                        >
                          <span>Sign up</span>
                          <svg
                            className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
          </>
        )}
        {session && (
          <>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className={` ${
                    props.withBackground
                      ? "border border-gray-300 bg-white dark:bg-gray-800 shadow-sm"
                      : ""
                  } flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500`}
                  id="options-menu"
                >
                  {props.label}

                  {props.icon || (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
                    </svg>
                  )}
                </button>
              </div>

              {(props.forceOpen || isOpen) && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div
                    className={`py-1 ${
                      props.withDivider ? "divide-y divide-gray-100" : ""
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {props.items.map((item) => {
                      return (
                        <a
                          key={item.label}
                          href={item.link || "#"}
                          className={`${
                            item.icon ? "flex items-center" : "block"
                          } block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600`}
                          role="menuitem"
                        >
                          {item.icon}

                          <span className="flex flex-col">
                            <span>{item.label}</span>
                            {item.desc && (
                              <span className="text-gray-400 text-xs">
                                {item.desc}
                              </span>
                            )}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </>
    );
}

export default Navbar