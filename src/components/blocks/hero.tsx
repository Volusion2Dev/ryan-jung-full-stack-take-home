import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Button } from "@blueprintjs/core";

const Container = styled.div`
  align-items: center;
  background-image: url("https://res.cloudinary.com/dyx4yhvoq/image/upload/c_fill,f_auto,q_auto/v1587410829/5e9c790d1a20a610174acc16/btfswvu2f3uqflsnaj3e.jpg");
  border-bottom: 2px solid #102a43;
  display: flex;
  height: 500px;
  justify-content: space-around;
  padding: 10px 20px;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  color: #f0f4f8;
  display: flex;
  flex-direction: column;
  min-height: 250px;
  min-width: 500px;
  padding: 20px;
  text-align: center;
`;

const Input = styled.textarea`
  background: none;
  border: none;
  box-shadow: none;
  color: #f0f4f8;
  font-family: "Open Sans", sans;
  resize: none;
`;

const Title = styled(Input)`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const SubTitle = styled(Input)`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: #d64545 !important;
  background-image: none !important;
  box-shadow: none !important;
  color: #f0f4f8 !important;
  font-weight: bold;
  margin: 0 auto;
  width: 30%;
`;

interface HeroProps {
  data: {
    title?: string;
    subtitle?: string;
  }
}

const Hero: React.FunctionComponent<HeroProps> = ({ data }): JSX.Element => {
  const [title, setTitle] = useState(data?.title || "Title");
  const [subtitle, setSubtitle] = useState(data?.subtitle || "Subtitle");

  useEffect(() => {
    setTitle(data?.title)
    setSubtitle(data?.subtitle)
  }, [data]);

  return (
    <Container data-testid="hero">
      <Overlay>
        <Title
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <SubTitle
          value={subtitle}
          onChange={(e) => setSubtitle(e.currentTarget.value)}
        />
        <StyledButton> Order Now! </StyledButton>
      </Overlay>
    </Container>
  );
}

export default Hero;
