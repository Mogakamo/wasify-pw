import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
          <>
            <div>
              <Link href="/api/auth/signout">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </Link>
            </div>
          </>
        );
    }
}

export default HomePage;