import React from "react";
import styled from "styled-components";

import { WondersmithGameEngine } from "wondersmith-game-engine";

import { createPage } from "../common/react";

const StyledCanvas = styled.canvas`
    width: 100%;
    height: 100%;
`;

const onCanvas = (element: HTMLCanvasElement) => {
    const engine = new WondersmithGameEngine({ canvas: element });
};

createPage(<StyledCanvas id="game" ref={onCanvas} />);
