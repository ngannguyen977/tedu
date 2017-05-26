import { BoconanhPage } from './app.po';

describe('boconanh App', function() {
  let page: BoconanhPage;

  beforeEach(() => {
    page = new BoconanhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
