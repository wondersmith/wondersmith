//import { ipcRenderer } from "electron";
import React from "react";
import styled from "styled-components";
import { createPage } from "../common/react";

const StyledSplash = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

const StyledHeader = styled.h1`
    color: white;
`;

const SplashPage = () => {
    return <StyledHeader>Wondersmith</StyledHeader>;
};

createPage(
    <StyledSplash>
        <SplashPage />
    </StyledSplash>
);

// eslint-disable-next-line
// @ts-expect-error
window.electron.ipcRenderer.send("goToPage", "login");
