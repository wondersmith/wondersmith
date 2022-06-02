import React from "react";

export interface WSTextboxProps {
    placeholder?: string;
    value?: string;
    readOnly?: boolean;
}

const Textbox: React.FC<WSTextboxProps> = props => {
    return <input type="text" placeholder={props.placeholder} value={props.value} readOnly={props.readOnly} />;
};

export default Textbox;