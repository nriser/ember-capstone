import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['color-palette-form'],

  palette:{}, // This object is filled in with user's inputs for colorone, two, three, and four in color-palette.hbs.

  actions: {
    submitPalette () {
      console.log('what is this', this.get('palette'));
      // this.sendAction('submitPalette', console.log());
    }
    // ,
    // reset () {
    //   this.set('credentials', {});
    // },
  },
});
