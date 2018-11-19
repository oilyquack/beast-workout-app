import { receiveSessions, getSessions } from "../../src/actions";

describe("actions", () => {
  it("should return RECEIVE_SESSIONS action from receiveSessions dispatch", () => {
    const mockFetchResult = {
      1: {
        name: "Unleash The Beast: Beginners",
        description: "Kick ass and take names"
      },
      2: {
        name: "Unleash The Beast: Intermediate",
        description: "Time to kick some more asses"
      }
    };

    const action = receiveSessions(mockFetchResult);

    const expectedAction = {
      type: "RECEIVE_SESSIONS",
      sessions: {
        1: {
          name: "Unleash The Beast: Beginners",
          description: "Kick ass and take names"
        },
        2: {
          name: "Unleash The Beast: Intermediate",
          description: "Time to kick some more asses"
        }
      }
    };

    expect(action).toEqual(expectedAction);
  });
});
