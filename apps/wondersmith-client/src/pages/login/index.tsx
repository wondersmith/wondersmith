import React from "react";

import { WSTextbox } from "wondersmith-ui";

import WSIpcClient from "../common/ipc";
import { createPage } from "../common/react";

createPage(<WSTextbox />);

setTimeout(() => WSIpcClient.get().send("goToPage", "game"), 1000);