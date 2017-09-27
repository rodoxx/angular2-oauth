import { Angular2Outh4Page } from './app.po';

describe('angular2-outh4 App', () => {
  let page: Angular2Outh4Page;

  beforeEach(() => {
    page = new Angular2Outh4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
