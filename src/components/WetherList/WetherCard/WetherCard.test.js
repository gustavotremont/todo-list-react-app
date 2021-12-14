import React from "react";
import { shallow } from "enzyme";
import WetherCard from "./WetherCard";

describe("WetherCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WetherCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
