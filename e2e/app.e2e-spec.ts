import { ScreencastPage } from './app.po';

describe('screencast App', function() {
  let page: ScreencastPage;

  beforeEach(() => {
    page = new ScreencastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
