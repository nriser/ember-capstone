import Ember from 'ember';

export default Ember.Component.extend({
  colorBg1: Ember.computed('color1', function() {
    let color1 = this.get('palette').get('color1');
    return Ember.String.htmlSafe("background-color: " + color1);
  }),
  colorBg2: Ember.computed('color2', function() {
    let color2 = this.get('palette').get('color2');
    return Ember.String.htmlSafe("background-color: " + color2);
  }),
  colorBg3: Ember.computed('color3', function() {
    let color3 = this.get('palette').get('color3');
    return Ember.String.htmlSafe("background-color: " + color3);
  }),
  colorBg4: Ember.computed('color4', function() {
    let color4 = this.get('palette').get('color4');
    return Ember.String.htmlSafe("background-color: " + color4);
  }),
  actions: {
    deletePalette () {
      this.sendAction('deletePalette', this.get('palette'));
    },
  },
});
