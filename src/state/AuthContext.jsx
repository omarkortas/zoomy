import React, { createContext, useContext, useState, useEffect } from "react";
import { addUser, getUserByEmail, validateLogin } from "../storage/storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

 const SignUp = (name, email, password, phoneNumber) => {
  const existingUser = getUserByEmail(email);
  if (existingUser) return { success: false, message: "Email already exists" };

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password,
    phoneNumber,
    role: "user",
    joined: new Date().toISOString(),
  };
  addUser(newUser);
  localStorage.setItem("user", JSON.stringify(newUser));
  setUser(newUser);
  return { success: true, user: newUser };
};

const Login = (email, password) => {
  const result = validateLogin(email, password);
  if (result.success) localStorage.setItem("user", JSON.stringify(result.user));
  setUser(result.user || null);
  return result;
};


  const Logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, Login, SignUp, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
