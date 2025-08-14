// import react dan hooks createContext,useContext, dan useEffect
import React, { createContext, useState, useEffect } from "react";

// import cookies dari js-cookie
import Cookies from "js-cookie";

// buat context
export const AuthContext = createContext();

// membuat provider otentikasi dengan menggunakan context yag telah dibuat
export const AuthProvider = ({ children }) => {
  // Menggunakan useState untuk menyimpan status otentikasi berdasarkan keberadaan token di cookies
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!Cookies.get("token")
  );

  //   Menggunakan useEffect untuk memantau perubahan pada token di cookies
  useEffect(() => {
    //Membuat fungsi handleTokenChange untuk memperbarui status otentikasi ketika token di cookies berubah
    const handleTokenChange = () => {
      setIsAuthenticated(!!Cookies.get("token"));
    };

    //Menambahkan event listener pada storage untuk memantau perubahan pada token
    window.addEventListener("storage", handleTokenChange);
    return () => {
      window.removeEventListener("storage", handleTokenChange);
    };
  }, []);

  //Mengembalikan provider dengan nilai isAuthenticated dan setIsAuthenticated yang diperoleh dari useState
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
