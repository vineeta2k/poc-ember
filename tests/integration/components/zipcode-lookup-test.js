import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zipcode-lookup', 'Integration | Component | zipcode lookup', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{zipcode-lookup}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#zipcode-lookup}}
      template block text
    {{/zipcode-lookup}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
