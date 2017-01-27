import { RestaurantsPage } from './app.po';

describe('restaurants App', function() {
  let page: RestaurantsPage;

  beforeEach(() => {
    page = new RestaurantsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
