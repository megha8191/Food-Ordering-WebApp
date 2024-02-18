import { render } from "@testing-library/react";
import Header from "../header"
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import {StaticRouter} from "react-router-dom/server"


test('Logo rendering properly', () => {
    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={Store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    // check Online status
    const logo = header.getByTestId('logo');
    expect(logo.src).toBe('http://localhost/dummy.jpg')
})

test('Check online status', () => {
    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={Store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    // check Online status
    const onlineStatus = header.getByTestId('onlineStatus');
    expect(onlineStatus.innerHTML).toBe('✅')
})