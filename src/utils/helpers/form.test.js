import { convertDate, getYearDayMonth } from './form';

describe('check convertDate', () => {
  it('check succes date', () => {
    expect(convertDate('12.12.2003')).toEqual('"2003-12-11T22:00:00.000Z"');
  });
  it('check fail date', () => {
    expect(convertDate()).toEqual(null);
  });
});

describe('check getYearDayMonth', () => {
  it('check more ten date', () => {
    expect(getYearDayMonth('2003-12-11T22:00:00.000Z')).toEqual('12.12.2003');
  });
  it('check less ten date', () => {
    expect(getYearDayMonth('2003-05-02T22:00:00.000Z')).toEqual('03.05.2003');
  });
});
