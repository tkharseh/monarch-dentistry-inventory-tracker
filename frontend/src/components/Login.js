import { useState, useEffect } from "react";
import HomeNavBar from "./HomeNavBar";
import items from "../table_data/items";
import { USERNAME, PASSWORD } from "./SECRETS";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (username === USERNAME && password === PASSWORD) {
      const auth = { id: 1, authorized: true };
      fetch("http://localhost:3000/loginData/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(auth),
      });
    } else {
      const auth = { id: 1, authorized: false };
      fetch("http://localhost:3000/loginData/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(auth),
      });
    }
  });

  const handleSubmit = () => {
    if (username === USERNAME && password === PASSWORD) {
      setValidLogin(true);
    } else {
      setValidLogin(false);
    }
    const auth = {
      id: 1,
      authorized: items.loginData[0].authorized,
    };
    fetch("http://localhost:3000/loginData/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(auth),
    });
    setSubmitted(true);
  };

  return (
    <div>
      <HomeNavBar currentPage="Login" class="absolute" />
      <div
        class="grid place-items-center pl-9 pr-9 "
        style={{ height: "92vh" }}
      >
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 p-9 border border-black rounded-2xl bg-white drop-shadow-2xl">
          <h1 class="text-lg font-bold">Login</h1>
          <form class="flex flex-col mt-4">
            <input
              type="email"
              name="email"
              class="px-4 py-3 w-full rounded-md border border-[f0f0f0] focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              class="px-4 py-3 mt-4 w-full rounded-md border border-[f0f0f0] focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <a
              type="submit"
              onClick={handleSubmit}
              href={validLogin && items.loginData[0].authorized && "/inventory"}
              class="mt-4 px-4 py-3 leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
              Login
            </a>
            {submitted && !validLogin && (
              <h1 class="text-red-600 text-center pt-3">
                Incorrect username or password{" "}
              </h1>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
