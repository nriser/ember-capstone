import Ember from 'ember';

export default Ember.Component.extend({
  palette: {
    color1: null, // value gets updated by value=palette.color1 in palette-edit-form.hbs (binding the value to the model data)
    color2: null,
    color3: null,
    color4: null
  },
  actions: {
    editPalette () {
      console.log("hooray, inside palette-edit-form, editPalette action")
      let newPalette = this.get('palette');
      console.log('newPalette in palette-edit.js', newPalette);
      this.sendAction('editPalette', newPalette);
    }
  }
});
