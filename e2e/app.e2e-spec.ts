import { NgDinnerTimePage } from './app.po';

describe('ng-dinner-time App', () => {
  let page: NgDinnerTimePage;

  beforeEach(() => {
    page = new NgDinnerTimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
