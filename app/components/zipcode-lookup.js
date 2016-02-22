import Ember from 'ember';

export default Ember.Component.extend({
  country_code: null,
  zipcode: null,
  actions: {
    countryAndZipCodeAdded: function() {
      var country_code = this.get("country_code");
      var zipcode = this.get("zipcode");
      if((country_code !== null) && (zipcode !== null) && (zipcode.length > 4)) {

        var self = this;
        var store = this.get('targetObject.store');
        var adapter = store.adapterFor('address');
        adapter.namespace = country_code;
        store.find('address', zipcode).then(
          function(address) {
            self.set('state', address.get('state'));

            self.set('city', address.get('city'));

            self.set('showPlace',true);
          }
        );

      }
    }
  }  
});
