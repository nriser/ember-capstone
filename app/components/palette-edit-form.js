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
      console.log("hooray, inside palette-edit-form, editPalette action");
      let editedPalette = this.get('palette'); // this gets 'palette' from line 4, but one with data that user inputted. At this point, this.get('palette') already has been updated with edited palette colors, and is changes its value anytime it is changed.
      console.log('editedPalette in palette-edit.js', editedPalette);
      console.log('what is edited.color1 in palette-edit-form.js', editedPalette.color1);
      console.log('what is edited.color1 in palette-edit-form.js', editedPalette.get('color1'));

      if (editedPalette.get('color1').match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) && editedPalette.get('color2').match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) &&
      editedPalette.get('color3').match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) &&
      editedPalette.get('color4').match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
        this.sendAction('editPalette', editedPalette);
      } else {
        this.get('flashMessages')
        .danger("Error: Please provide a valid hex code, starting with a '#'");
      }


      // this.sendAction('editPalette', newPalette);
    },
    cancel () {
      console.log('at cancel in components/palette-edit-form.js');
      this.get('palette').rollbackAttributes();
      this.sendAction('cancel');
    }
  }
});

// 'cancel' action: When user clicks on 'back' after having edited values but do not submit, roll back the attribute to the previous attributes (from new value to old value). Then, send action up to palette-edit.js/hbs so that the page goes back to the prevous page (palettes view)