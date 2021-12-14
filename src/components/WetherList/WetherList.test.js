import React from "react";
import { shallow } from "enzyme";
import WetherList from "./WetherList";

describe("WetherList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WetherList />);
    expect(wrapper).toMatchSnapshot();
  });
});
