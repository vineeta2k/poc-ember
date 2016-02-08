import Ember from 'ember';

export default Ember.Controller.extend({
	
		country_code: null,
		zipcode: null,
		togglePlace: function() {
			
			var country_code = this.get("country_code");
			
			
			var zipcode = this.get("zipcode");
			
				
			
			if((country_code.trim() !== '') && (zipcode.trim() !== '')) {
				this.set('showPlace',true);
			}
		}.observes('country_code', 'zipcode')
		
	
});
