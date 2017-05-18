import { test } from 'qunit';
import moduleForAcceptance from 'mirage-problems/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | example');

test('ember-cli-mirage', function(assert) {
  server.createList('page', 5, 'withGreatGrandChildren');

  assert.ok(true);
});
