import { Factory, association, trait } from 'ember-cli-mirage';

export default Factory.extend({
  parentPage: association(),
  withChildren: trait({
    afterCreate(page, server) {
      server.createList('page', 3, { parentPage: page });
    }
  }),
  withGrandChildren: trait({
    afterCreate(page, server) {
      server.createList('page', 2, { parentPage: page }, 'withChildren');
    }
  }),
  withGreatGrandChildren: trait({
    afterCreate(page, server) {
      server.create('page', { parentPage: page }, 'withGrandChildren');
    }
  }),
});
