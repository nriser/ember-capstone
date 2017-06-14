import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('palette-analysis', 'Integration | Component | palette analysis', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{palette-analysis}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#palette-analysis}}
      template block text
    {{/palette-analysis}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
