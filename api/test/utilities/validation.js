import { expect } from 'chai';

import {isURL} from '../../src/utils/validation';


describe('Validation', () => {
  describe('URL', () => {
    let validUrls = ['https://techcrunch.com/feed', 'http://jesaisquoi-.tumblr.com/rss', 'http://xn--das-kchengeflster-62bi.de/feed', 'http://blogsearch.google.com/blogsearch_feeds?oe=utf-8&q=land surveying&rls=org.mozilla:en-us:offici']
    let invalidUrls = ['http://inoreader-dw/gk-inoreader-culture.21643-media', 'newsletter:60000:info@hyggeonkel.dk']

    for (let url of validUrls) {
      it(`the url should be valid ${url.slice(0,30)}`, async () => {
        let valid = isURL(url)
        expect(valid).to.be.true;
      });
    }

    for (let url of invalidUrls) {
      it(`the url should be invalid ${url.slice(0,30)}`, async () => {
        let valid = isURL(url)
        expect(valid).to.be.false;
      });
    }

  });


});