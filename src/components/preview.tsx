import { Checkbox } from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";

const PreviewModeLabel = styled.label`
  font-size: 14px;
  position: absolute;
  left: 50%;
  z-index: 100;
`
const PreviewModeInput = styled(Checkbox)`
  float:right;
`;

const PreviewModeText = styled.span`
  font-weight: bold;
  float: right;
  font-size: large;
`
interface PreviewProps {
    setPreviewMode : (previewMode: boolean) => void;
    previewMode: boolean;
}

const Preview: React.FunctionComponent<PreviewProps> = ({setPreviewMode, previewMode}) => {
    return (
        <PreviewModeLabel>
            <PreviewModeInput onClick={() => setPreviewMode(!previewMode)}/>
            <PreviewModeText>Preview Mode</PreviewModeText>
        </PreviewModeLabel>
    )
}

export default Preview;