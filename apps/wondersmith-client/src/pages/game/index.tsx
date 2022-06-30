import React from "react";
import styled from "styled-components";
import { SceneLoader } from "@babylonjs/core";

import { WondersmithGameEngine } from "wondersmith-game-engine";

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

const onCanvas = (canvas: HTMLCanvasElement) => {
    // TODO: Don't start yet, wait for scene load
    const assets = (window as any).preload.lib.createAssetManager(SceneLoader);
    console.log(assets);
    WondersmithGameEngine.init({ canvas, assets }).start();
    new ResizeObserver(() => WondersmithGameEngine.get().resize()).observe(canvas);
};

createPage(
    <>
        <StyledUIFrame id="ui" src="../ui/index.html" />
        <StyledCanvas id="game" ref={onCanvas} />
    </>
);
