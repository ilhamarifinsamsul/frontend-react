// import sidebarmenu
import SidebarMenu from "../../components/SidebarMenu";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Dashboard() {
  // init state user
  const [user, setUser] = useState({});
  // useEffect
  useEffect(() => {
    // get user from cookie
    const user = Cookies.get("user");
    // set user to state
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-md-9">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header">DASHBOARD</div>
            <div className="card-body">
              Selamat Datang, <strong>{user?.name}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
