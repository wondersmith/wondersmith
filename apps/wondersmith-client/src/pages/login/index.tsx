import React from "react";

import { WSTextbox } from "wondersmith-ui";

import { createPage } from "../common/react";

createPage(<WSTextbox />);

// eslint-disable-next-line
// @ts-expect-error
setTimeout(() => window.electron.ipcRenderer.send("goToPage", "game"), 1000);