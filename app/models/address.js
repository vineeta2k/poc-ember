import DS from 'ember-data';

export default DS.Model.extend({
  country: DS.attr( { defaultValue: 'US' }),
  zip: DS.attr(),
  city: DS.attr(),
  state: DS.attr()
});
