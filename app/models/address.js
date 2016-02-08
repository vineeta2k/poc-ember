import DS from 'ember-data';

export default DS.Model.extend({
  country: DS.attr(),
  zip: DS.attr(),
  placeName: DS.attr(),
  state: DS.attr()
  
});


