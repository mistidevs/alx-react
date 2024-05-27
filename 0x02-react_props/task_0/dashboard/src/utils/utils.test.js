import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('getFullYear', () => {
  it('should return the current year', () => {
    const year = getFullYear();

    expect(year).toBe(new Date().getFullYear());
  });
});

describe('getFooterCopy', () => {
  it('should return the correct string for true argument', () => {
    const expectedString = 'Holberton School';
    const string = getFooterCopy(true);
    expect(string).toBe(expectedString);
  });

  it('should return the correct string for false argument', () => {
    const expectedString = 'Holberton School main dashboard';
    const string = getFooterCopy(false);
    expect(string).toBe(expectedString);
  });
});

describe('getLatestNotification', () => {
  it('should return a string', () => {
    const notification = getLatestNotification();
    const expectedNotif = "<strong> Urgent requirement</strong> - complete by EOD"
    expect(notification).toBe(expectedNotif);
  });
});
