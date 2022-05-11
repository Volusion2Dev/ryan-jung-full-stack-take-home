import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

const Container = styled.header`
  align-items: center;
  border-bottom: 2px solid #102a43;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Name = styled.input`
  background: none;
  border: none;
  box-shadow: none;
  color: #d64545;
  font-size: 30px;
  font-weight: bold;
`;

interface HeaderProps {
  data?: { title: string};
}

const Header: React.FunctionComponent<HeaderProps> = ({ data }): JSX.Element => {
  const [title, setTitle] = useState(data?.title || 'store name');
  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    setTitle(data?.title);
  }, [data]);
  return (
    <Container data-testid="header">
      <Name
        placeholder="Store Name" defaultValue={title}
        onChange={(e) => setTitle(e.currentTarget.value)}/>
      <Icon icon="shopping-cart" intent="success" iconSize={28} />
    </Container>
  );
};

export default Header;
