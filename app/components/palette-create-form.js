import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['color-palette-form'],

  newPalette: {}, // reset
  //   color1: null,
  //   color2: null,
  //   color3: null,
  //   color4: null
  // }, // This object is filled in with user's inputs for colorone, two, three, and four in color-palette.hbs.

  actions: {
    createPalette () {
      let data = this.get('newPalette');
      console.log('data in palette-create-form.js is', data);
      //
      if (data.color1.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) &&
      data.color2.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) &&
      data.color3.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) &&
      data.color4.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
        this.sendAction('createPalette', data);
        this.set('newPalette.color1', null);
        this.set('newPalette.color2', null);
        this.set('newPalette.color3', null);
        this.set('newPalette.color4', null);
      } else {
        this.get('flashMessages')
        .danger("Error: Please provide a valid hex code, starting with a '#'");
      }
    }
    // ,
    // reset () {
    //   this.set('credentials', {});
    // },
  },
});

// Use below regular expression to validate user-inputted values for color1 -
// color4. Check to see that the values are valid hexadecimal color codes.
// ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
