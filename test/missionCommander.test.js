const MissionCommander = require('../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
  test("1) Create a mission commander object", () => {
    const mc = new MissionCommander("Woopa");
    expect(mc.name).toBe("Woopa");
  });
});
