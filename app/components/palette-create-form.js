import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['color-palette-form'],

  newPalette: {},
  //   color1: null,
  //   color2: null,
  //   color3: null,
  //   color4: null
  // }, // This object is filled in with user's inputs for colorone, two, three, and four in color-palette.hbs.

  actions: {
    createPalette () {
      let data = this.get('newPalette');
      console.log('data in palette-create-form.js is', data);
      this.sendAction('createPalette', data);
      this.set('newPalette.color1', null);
      this.set('newPalette.color2', null);
      this.set('newPalette.color3', null);
      this.set('newPalette.color4', null);
    }
    // ,
    // reset () {
    //   this.set('credentials', {});
    // },
  },
});
