import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";


describe("checking the correct action types options are returned for Notifications action types", () => {
  it("returns the correct object for MARK_AS_READ", () => {
    const expectedMarked = { type: MARK_AS_READ, payload: 1 };
    const marked = markAsAread(1);

    expect(marked).toEqual(expectedMarked);
  });
  it("returns the correct object for SET_TYPE_FILTER", () => {
    const expectedFilter = { type: SET_TYPE_FILTER, payload: "DEFAULT" };
    const filter = setNotificationFilter("DEFAULT");

    expect(filter).toEqual(expectedFilter);
  });
});
