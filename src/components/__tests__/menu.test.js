import "@testing-library/jest-dom";
import { render, waitFor ,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import {StaticRouter} from "react-router-dom/server"
import Body from "../body";
import { res_data ,menu_data} from "../../mocks/data";
import Header from "../header";
import RestaurantDetail from "../restaurantdetail";


global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(menu_data);
      },
    });
  });

test("Updating cart number on add btn click", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={Store}>
          <Header/>
          <RestaurantDetail/>
        </Provider>
      </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId("menu")));

    const addbtn =body.getAllByTestId('addbtn')

    fireEvent.click(addbtn[0]);
    expect(body.getByTestId('cartNumber').innerHTML).toBe("1")
});