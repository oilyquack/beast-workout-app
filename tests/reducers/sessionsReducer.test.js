import sessionsReducer from "../../src/reducers/sessionsReducer";

describe("sessionsReducer", () => {
  it("executes default state on initial render action", () => {
    const initialState = {};

    const action = {
      type: "XXX"
    };

    const expectedState = {};

    const outputState = sessionsReducer(initialState, action);

    expect(outputState).toEqual(expectedState);
  });

  it("executes RECEIVE_SESSIONS action", () => {
    const initialState = {};

    const action = {
      type: "RECEIVE_SESSIONS",
      sessions: [
        {
          id: 1,
          name: "Unleash The Beast: Beginners",
          startdate: "01-12-2018",
          starttime: "19:00",
          endtime: "20:00",
          description: "Kick ass and take names",
          capacity: 20
        },
        {
          id: 2,
          name: "Unleash The Beast: Intermediate",
          startdate: "02-12-2018",
          starttime: "20:00",
          endtime: "22:00",
          description: "Time to kick some more asses",
          capacity: 10
        }
      ]
    };

    const expectedState = {
      1: {
        id: 1,
        name: "Unleash The Beast: Beginners",
        startdate: "01-12-2018",
        starttime: "19:00",
        endtime: "20:00",
        description: "Kick ass and take names",
        capacity: 20
      },
      2: {
        id: 2,
        name: "Unleash The Beast: Intermediate",
        startdate: "02-12-2018",
        starttime: "20:00",
        endtime: "22:00",
        description: "Time to kick some more asses",
        capacity: 10
      }
    };

    const outputState = sessionsReducer(initialState, action);

    expect(outputState).toEqual(expectedState);
  });
});
