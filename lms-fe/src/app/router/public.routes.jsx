import React from "react";
import PublicLayout from "../layouts/PublicLayout";
import PublicHomePage from "../../features/public-site/pages/PublicHomePage";
import LoginPage from "../../features/auth/pages/LoginPage";
import NotFound from "../../shared/components/NotFound";
import PublicCoursePage from "../../features/courses/pages/PublicCoursePage";
import courseService from "../../features/courses/services/course.service";

const publicRoutes = [
  { path: "/login", element: <LoginPage /> },
  // {path: "/register", element: <RegisterPage />},
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <PublicHomePage /> },
      { path: "courses", element: <PublicCoursePage />,
        loader: courseService.findAll
       },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default publicRoutes;
