import { ThemeProvider } from "flowbite-react";
import { customTheme } from "../config/flowbite";
import { RouterProvider } from "react-router-dom";
import { routes } from "../routes/routes";

interface Props {}

const Providers = ({}: Props) => {
  return (
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};
export default Providers;
