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
      let newPalette = this.get('palette'); // this gets 'palette' from line 4, but one with data that user inputted.
      console.log('newPalette in palette-edit.js', newPalette);
      this.sendAction('editPalette', newPalette);
    },
    cancel () {
      console.log('at cancel in components/palette-edit-form.js');
      this.get('palette').rollbackAttributes();
      this.sendAction('cancel');
    }
  }
});

// 'cancel' action: When user clicks on 'back' after having edited values but do not submit, roll back the attribute to the previous attributes (from new value to old value). Then, send action up to palette-edit.js/hbs so that the page goes back to the prevous page (palettes view)
