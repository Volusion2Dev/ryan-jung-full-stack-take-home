import React from "react";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";

import blocks from "../components/blocks";

const Container = styled.div`
  webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
    0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2),
    0 18px 46px 6px rgba(16, 22, 26, 0.2);
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderSection = styled.div`
  background: #243b53;
  margin-bottom: 10px;
  padding: 20px 20px;
`;

const HeaderText = styled.h2`
  color: #f0f4f8;
  margin: 0;
`;

const BlockSection = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  background-color: #9fb3c8 !important;
  background-image: none !important;
  box-shadow: none !important;
  color: #102a43 !important;
  font-weight: bold;
  margin: 5px auto;
  padding: 10px;
  text-transform: capitalize;
  width: 80%;
`;

interface BlockPickerProps {
  addBlock: (blockName: string) => void;
  className?: string;
}

const BlockPicker: React.FunctionComponent<BlockPickerProps> = ({ addBlock, className }) => {
  return (
    <Container className={className}>
      <HeaderSection>
        <HeaderText> Add a Block </HeaderText>
      </HeaderSection>
      <BlockSection>
        {Object.keys(blocks).map((blockName: string, index: number) => (
          <StyledButton
            data-testid={`block-add-${blockName}`}
            key={index}
            onClick={() => addBlock(blockName)}
          >
            {blockName}
          </StyledButton>
        ))}
      </BlockSection>
    </Container>
  );
};

export default BlockPicker;
