import { ipcRenderer } from "electron";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

// eslint-disable-next-line
// @ts-expect-error
globalThis.ipcRenderer = ipcRenderer;

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

ReactDOM.render(
    <StyledSplash>
        <SplashPage />
    </StyledSplash>,
    document.getElementById("root")
);
