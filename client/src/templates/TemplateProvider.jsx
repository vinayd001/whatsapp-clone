import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const TemplateContext = React.createContext(null);

const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          root: {
            zIndex: 1300,
          },
          paper: {
            left: 52,
            top: 14,
            height: "95%",
            width: "29.2%",
            boxShadow: "none",
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: "unset",
          },
        },
      },
    },
  });

  return (
    <TemplateContext.Provider value="">
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
