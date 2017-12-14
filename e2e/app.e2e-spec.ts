import { KiteUIPage } from './app.po';

describe('kite-ui App', () => {
  let page: KiteUIPage;

  beforeEach(() => {
    page = new KiteUIPage();
  });

  it('should display admin message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
