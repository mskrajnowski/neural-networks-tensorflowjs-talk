import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import { Presentation } from "./Presentation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <CssBaseline />
      <Presentation />
    </>
  </React.StrictMode>
);
