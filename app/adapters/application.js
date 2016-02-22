import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
	 host: 'http://api.zippopotam.us',
	 namespace: 'us',
	 pathForType: function(type) {
		return '';
  }
});
