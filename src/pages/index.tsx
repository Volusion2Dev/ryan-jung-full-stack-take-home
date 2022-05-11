import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Toaster } from "@blueprintjs/core";

import * as api from './api';

import UnstyledBlockPicker from "../components/block-picker";
import UnstyledSite from "../components/site";
import { Block, BlockType } from "../types";

const AppContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const BlockPicker = styled(UnstyledBlockPicker)`
  width: 30%;
`;

const Site = styled(UnstyledSite)`
  flex: 1;
  z-index: 1;
`;

const defaultBlocks: Block[] = [
  {
    id: 1,
    type: "header",
    position: 0,
    configData: {
      title: 'Default Title'
    },
  },
  {
    id: 2,
    type: "hero",
    position: 1,
    configData: {
      title: 'Default Title',
      subtitle: 'Default Subtitle',
    }
  },
  {
    id: 3,
    type: "footer",
    position: 2,
    configData: null
  }
];

export default function Home(): JSX.Element {
  const [blockList, setBlockList] = useState(defaultBlocks);
  const [activeIndex, setActiveIndex] = useState(-1);
  const toasterRef = useRef(null);

  useEffect(() => {
    async function getBlocks() {
      try {
        const blocks: Block[] = await api.getBlocks();
        setBlockList(blocks);
      } catch (err) {
        toasterRef.current.show({
          message: err.message,
          intent: "danger",
        });
      }
    }
    getBlocks();
  }, []);

  // TODO: call api to save block
  const addBlock = (blockName: BlockType) => {
    if (activeIndex === -1) {
      toasterRef.current.show({
        message:
          "Please select where you want to add the block within the site preview",
        intent: "danger",
      });
      return;
    }
    const updatedBlockList = [
      ...blockList.slice(0, activeIndex),
      { id: -1, type: blockName, position: activeIndex + 1, configData: null  },
      ...blockList.slice(activeIndex),
    ];

    setBlockList(updatedBlockList);
    setActiveIndex(activeIndex + 1);
  };

  const removeBlock = (index: number) => {
    const updatedBlockList = [
      ...blockList.slice(0, index),
      ...blockList.slice(index + 1),
    ];
    setBlockList(updatedBlockList);

    if (activeIndex > index) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div>
      <Head>
        <title>Site Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppContainer>
        <Toaster ref={toasterRef} />
        <BlockPicker addBlock={addBlock} />
        <Site
          activeIndex={activeIndex}
          blockList={blockList}
          removeBlock={removeBlock}
          setActiveIndex={setActiveIndex}
        />
      </AppContainer>
    </div>
  );
}
