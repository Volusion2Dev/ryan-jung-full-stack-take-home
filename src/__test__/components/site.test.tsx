import React from "react";
import { render } from "@testing-library/react";

import Site from "../../components/site";
import { getDefaultBlocks } from "../utils";

describe("Site preview", () => {
  it("renders the footer", () => {
    const { queryByTestId } = render(
      <Site
        activeIndex={-1}
        blockList={[{ id: 1, type: "footer", position: 0, configData: null}]}
        removeBlock={() => null}
        setActiveIndex={() => null}
      />
    );

    expect(queryByTestId("header")).toBeFalsy();
    expect(queryByTestId("footer")).toBeTruthy();
  });

  it("renders all blocks", () => {
    const { queryByTestId } = render(
      <Site
        activeIndex={-1}
        blockList={getDefaultBlocks()}
        removeBlock={() => null}
        setActiveIndex={() => null}
      />
    );

    expect(queryByTestId("header")).toBeTruthy();
    expect(queryByTestId("hero")).toBeTruthy();
    expect(queryByTestId("footer")).toBeTruthy();
  });
});
