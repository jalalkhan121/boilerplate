const search = instantsearch({
  appId: '3544RBSU3K',
  apiKey: '02d146723d3c736d085dd6f936f026c5',
  indexName: 'turnwel_index', //instant_search
  urlSync: true
});

search.start();
// `npm install instantsearch.js --save` OR
// `yarn add instantsearch.js`

const instantsearch = require('instantsearch.js');
