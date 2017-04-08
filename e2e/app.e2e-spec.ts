import { AngRafakrdotPage } from './app.po';

describe('ang-rafakrdot App', () => {
  let page: AngRafakrdotPage;

  beforeEach(() => {
    page = new AngRafakrdotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
