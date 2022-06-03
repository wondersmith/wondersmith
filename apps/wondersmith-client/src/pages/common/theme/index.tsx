import React from "react";
import { ThemeProvider } from "styled-components";

export type WSThemeProps = React.PropsWithChildren<{ theme?: any}>;

const WSTheme: React.FC<WSThemeProps> = props => {
    return <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>;
};

WSTheme.defaultProps = {
    theme: {}
};

export default WSTheme;
