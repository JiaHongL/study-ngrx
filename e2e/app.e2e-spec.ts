import { StudyNgrxPage } from './app.po';

describe('study-ngrx App', () => {
  let page: StudyNgrxPage;

  beforeEach(() => {
    page = new StudyNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
