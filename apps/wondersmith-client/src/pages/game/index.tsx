import React from "react";
import styled from "styled-components";

import { WondersmithGameEngine } from "wondersmith-game-engine";

import WSIpcClient from "../common/ipc";
import { createPage } from "../common/react";

const StyledCanvas = styled.canvas`
    width: 100%;
    height: 100%;
`;

const StyledUIFrame = styled.iframe`
    width: 100%;
    height: 100%;
    pointer-events: none;
    border: none;
    background: transparent;
    position: absolute;
    top: 0px;
    left: 0px;
    user-select: none;
`;

const onCanvas = (element: HTMLCanvasElement) => {
    // TODO: Don't start yet, wait for scene load
    const engine = new WondersmithGameEngine({ canvas: element }).start();
};

createPage(
    <>
        <StyledUIFrame id="ui" src="../ui/index.html" />
        <StyledCanvas id="game" ref={onCanvas} />
    </>
);

WSIpcClient.get().on("resize", console.log.bind(console));
