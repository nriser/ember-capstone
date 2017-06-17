import Ember from 'ember';

export default Ember.Component.extend({
  // palette: {
  //   color1: null, // value gets updated by value=palette.color1 in palette-edit-form.hbs (binding the value to the model data)
  //   color2: null,
  //   color3: null,
  //   color4: null
  // },
  actions: {
    editPalette () {
      let editedPalette = this.get('palette'); // this gets 'palette' from line 4, but one with data that user inputted. At this point, this.get('palette') already has been updated with edited palette colors, and is changes its value anytime it is changed.

      if (editedPalette.get('color1').match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) && editedPalette.get('color2').match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) &&
      editedPalette.get('color3').match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) &&
      editedPalette.get('color4').match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
        this.sendAction('editPalette', editedPalette);
        Ember.$('.button-group-view-create').show();
      } else {
        this.get('flashMessages')
        .danger("Error: Please provide a valid hex code, starting with a '#'");
      }


      // this.sendAction('editPalette', newPalette);
    },
    cancel () {
      this.get('palette').rollbackAttributes();
      this.sendAction('cancel');
      Ember.$('.button-group-view-create').show();
    }
  }
});

// 'cancel' action: When user clicks on 'back' after having edited values but do not submit, roll back the attribute to the previous attributes (from new value to old value). Then, send action up to palette-edit.js/hbs so that the page goes back to the prevous page (palettes view)
