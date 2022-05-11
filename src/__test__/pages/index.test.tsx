import axios from 'axios';
import React from "react";
import { act, render, fireEvent } from "@testing-library/react";

import App from "../../pages";
import { getDefaultBlocks, getHeaderBlock } from '../utils';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe("Site preview", () => {
  const mockGetPromise = Promise.resolve({ data: getDefaultBlocks() });
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce(mockGetPromise);
  });

  describe('add-button spacer', (): void => {
    it("Clicking the add button adds a spacer and hides the two buttons around the spacer", async () => {
      const { getAllByTestId, queryByTestId } = render(<App />);

      expect(getAllByTestId("add-button").length).toBe(6);

      fireEvent.click(getAllByTestId("add-button")[1]);

      expect(getAllByTestId("add-button").length).toBe(4);
      expect(queryByTestId("spacer")).toBeTruthy();

      // see https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
      await act(() => mockGetPromise);
    });

    it("Adds the spacer when it's at the end of the block list", async () => {
      const { getAllByTestId, queryByTestId } = render(<App />);

      expect(getAllByTestId("add-button").length).toBe(6);

      fireEvent.click(getAllByTestId("add-button")[5]);

      expect(getAllByTestId("add-button").length).toBe(5);
      expect(queryByTestId("spacer")).toBeTruthy();

      await act(() => mockGetPromise);
    });
  });

  describe('remove', (): void => {
    it("Removes blocks when you click the remove button", async () => {
      const { getAllByTestId, queryByTestId } = render(<App />);

      expect(queryByTestId("header")).toBeTruthy();
      expect(getAllByTestId("remove-button").length).toBe(3);

      const mockDeletePromise = Promise.resolve({ status: 204 });
      mockedAxios.delete.mockResolvedValueOnce(mockDeletePromise);
      await act(() => mockDeletePromise);
      fireEvent.click(getAllByTestId("remove-button")[0]);

      expect(queryByTestId("header")).toBeFalsy();

      await act(() => mockGetPromise);
    });
  });

  describe('add block', (): void => {
    it("Adds blocks when you click them in the sidebar", async () => {
      const { getByTestId, getAllByTestId, queryAllByTestId } = render(<App />);

      expect(queryAllByTestId("header").length).toBe(1);
      fireEvent.click(getAllByTestId("add-button")[0]);

      const mockPostPromise = Promise.resolve({ data: getHeaderBlock(4) });
      mockedAxios.post.mockResolvedValueOnce(mockPostPromise);
      await act(() => mockPostPromise);
      fireEvent.click(getByTestId("block-add-header"));

      const mockGetPromiseAfterAdd = Promise.resolve({ data: getDefaultBlocks().concat(getHeaderBlock(4, 1)) });
      mockedAxios.get.mockResolvedValueOnce(mockGetPromiseAfterAdd);
      await act(() => mockGetPromiseAfterAdd);
      expect(queryAllByTestId("header").length).toBe(2);

      await act(() => mockGetPromise);
    });
  });
});
