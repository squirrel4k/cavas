import {render, screen} from '@testing-library/react';
import React from "react";
import {Navbar} from "../../../src/components";

describe("Navbar Component", () => {
test('Should rendering navbar component ', () => {
    render(<Navbar/>)
    expect(screen.findByTestId("navbar")).toBeDefined();
    })
})