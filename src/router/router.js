import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListPosts from "../components/ListPosts/ListPosts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/posts/:postsId",
    element: <ListPosts />,
  },
]);

export default router;