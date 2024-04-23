// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import "./App.css";
// import authService from "./appwrite/authservice";
import { Footer } from "./components/footer/Footer";
// import { logOut, login } from "./store/authSlice";

export function App() {
  // const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login(userData));
  //       } else {
  //         dispatch(logOut());
  //       }
  //     })
  //     .finally(() => setLoading(false));
  // });

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  );
}

// export default App;
