import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import store from "./utils/store";
// import { Children } from "react";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element : <Body/>,
  children: [{
    path: "/",
    element: <MainContainer/>
  },
  {
    path: "watch",
    element: <WatchPage/>
  }

  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
        {
          // head
          // Body
          // sidebar
          // menuitem
          // MainContainer
          // ButtonsList
          // VideoContainer
          // videocard
        }
      </div>
    </Provider>
  );

}

export default App;
