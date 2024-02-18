import "@testing-library/jest-dom";
import { render, waitFor ,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import {StaticRouter} from "react-router-dom/server"
import Body from "../body";
import { res_data } from "../../mocks/data";

test('Shimmer Loaded Properly', () => {
    // Load body
    const body = render(
        <StaticRouter>
            <Provider store={Store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    const shimmerCards = body.getByTestId('shimmerCards');
    expect(shimmerCards.children.length).toBe(9)
})

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(res_data);
      },
    });
  });

test("Restaurants should load on Homepage", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={Store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId("search-btn")));
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(20);
  });


  test("Search for string(food) on Homepage", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={Store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId("search-btn")));
    const input = body.getByTestId("search-input");
    fireEvent.change(input, {
      target: {
        value: "pizza",
      },
    });
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
    
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(2);
  });

