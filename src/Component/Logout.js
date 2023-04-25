import React from "react";
import API from "./globalapi";

export default function Logout() {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["accessToken"]);

  const handleLogout = async () => {
    const response = await axios.get(`${API}/logout`, {
      userCredentials: true
    });
    if (response) {
      removeCookie("accessToken");
      navigate("/login");
    }
  };
  handleLogout();
  return <div>Logout successfully</div>;
}
