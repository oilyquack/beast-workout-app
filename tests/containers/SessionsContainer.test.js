import { mapStateToProps } from "../../src/containers/SessionsContainer";

describe("mapStateToProps", () => {
  it("extracts state from reduxState (SessionsContainer)", () => {
    const reduxState = {
      sessionsReducer: {
        1: {
          id: 1,
          name: "Unleash The Beast: Beginners",
          description: "Kick ass and take names",
          capacity: 10
        },
        2: {
          id: 2,
          name: "Unleash The Beast: Intermediate",
          description: "Time to kick some more asses",
          capacity: 10
        }
      }
    };

    const expectedOutput = {
      sessions: {
        1: {
          id: 1,
          name: "Unleash The Beast: Beginners",
          description: "Kick ass and take names",
          capacity: 10
        },
        2: {
          id: 2,
          name: "Unleash The Beast: Intermediate",
          description: "Time to kick some more asses",
          capacity: 10
        }
      }
    };

    const output = mapStateToProps(reduxState);

    expect(output).toEqual(expectedOutput);
  });
});
