import React from "react";
import styled from "styled-components";

import { Icon } from "@blueprintjs/core";

import blocks from "../components/blocks";
import { Block } from '../types';

const Container = styled.div`
  overflow-x: scroll;
  position: relative;
`;

const BlockContainer = styled.div`
  margin: 0;
  transition: margin 0.2s ease;

  button {
    opacity: 0;
  }

  &:hover,
  &:focus {
    margin: 15px 0;

    input,
    textarea {
      outline: 1px solid #87eaf2;
    }

    button {
      opacity: 1;
    }
  }
`;

const Spacer = styled.div`
  align-items: center;
  color: #334e68;
  display: flex;
  height: 30px;
  justify-content: space-around;
  position: relative;
`;

const CloseSpacer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 25px;
`;

const AddButton = styled.button.attrs({
  "data-testid": "add-button",
})`
  background: #3ebd93;
  border-radius: 30px;
  border: none;
  color: #f0f4f8;
  cursor: pointer;
  font-weight: bold;
  height: 30px;
  left: calc(50% - 15px);
  position: absolute;
  transform: translateY(-15px);
  transition: opacity 0.2s ease;
  width: 30px;
`;

const TrashButton = styled.button`
  background: white;
  border: 1px solid #102a43;
  border-radius: 30px;
  cursor: pointer;
  height: 30px;
  position: absolute;
  right: 15px;
  transform: translateY(5px);
  transition: opacity 0.2s ease;
  width: 30px;
`;

interface SiteProps {
  activeIndex: number;
  blockList: Block[];
  className?: string;
  removeBlock: (index: number) => void;
  setActiveIndex: (index: number) => void;
}

const site: React.FunctionComponent<SiteProps> = ({
  activeIndex,
  blockList,
  className,
  removeBlock,
  setActiveIndex,
}) => {
  return (
    <Container className={className}>
      {blockList.map((block: Block, index: number) => {
        const Component = blocks[block.type];
        return (
          <BlockContainer data-testid="block-container" key={index}>
            {index === activeIndex ? (
              <Spacer data-testid="spacer">
                <div>(Insert Blocks from the Side Panel Here)</div>
                <CloseSpacer onClick={() => setActiveIndex(-1)}>x</CloseSpacer>
              </Spacer>
            ) : (
              <AddButton onClick={() => setActiveIndex(index)}> + </AddButton>
            )}
            <TrashButton
              data-testid="remove-button"
              onClick={() => removeBlock(index)}
            >
              <Icon icon="trash" intent="danger" iconSize={15} />
            </TrashButton>
            <Component data={block.configData} />
            {index + 1 !== activeIndex && (
              <AddButton onClick={() => setActiveIndex(index + 1)}>+</AddButton>
            )}
          </BlockContainer>
        );
      })}
      {activeIndex === blockList.length && (
        <Spacer data-testid="spacer">
          <div>(Insert Blocks from the Side Panel Here)</div>
          <CloseSpacer onClick={() => setActiveIndex(-1)}>x</CloseSpacer>
        </Spacer>
      )}
    </Container>
  );
};

export default site;
