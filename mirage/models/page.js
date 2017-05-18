import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  parentPage: belongsTo('page', { inverse: 'childPages' }),
  childPages: hasMany('page', { inverse: 'parentPage' })
});
