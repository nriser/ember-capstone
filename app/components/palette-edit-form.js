import Ember from 'ember';

export default Ember.Component.extend({
  // temporarily set user input to 'editedPalette' instead of 'palette' so that user input will not initially be bound to original palette. If we had instead set value=palette.color1 in palette-edit-form.hbs, then this.get('palette') (original palette saved in database) will automatically display user-inputted data colors, althought not saved in DB. In this case, this is not desired due to the fact that users could click on 'My Palettes' button before submitting edited palette. The colors in palettes on My Palettes page will update EVEN IF user had not submitted the edited palette).
  editedPalette: {
    color1: null, // value gets updated by value=editedPalette.color1 in palette-edit-form.hbs (binding the value to editedPalette).
    color2: null,
    color3: null,
    color4: null
  },
  onInit: function() {
  // When this component is initialized
  // When go to the editing view, show the user's original palette present in the database
    // get the colors of the original palette
    let color1 = this.get('palette').get('color1');
    let color2 = this.get('palette').get('color2');
    let color3 = this.get('palette').get('color3');
    let color4 = this.get('palette').get('color4');

    // set the colors of editedPalette to those of original palette
    this.set('editedPalette.color1', color1);
    this.set('editedPalette.color2', color2);
    this.set('editedPalette.color3', color3);
    this.set('editedPalette.color4', color4);
  }.on("init"),

  actions: {
    // update without binding
    editPalette () {
    // when user clicks on 'submit edited palette'
      let editedPalette = this.get('editedPalette'); // this gets 'editedPalette', BUT filled with user-inputted colors. NOT the original palette!
      // get the colors of the edited palette
      let color1 = editedPalette.color1;
      let color2 = editedPalette.color2;
      let color3 = editedPalette.color3;
      let color4 = editedPalette.color4;

      // Validates user-inputted colors of edited palette.
      if (editedPalette.color1.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) && editedPalette.color2.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) &&
      editedPalette.color3.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) &&
      editedPalette.color4.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
        // If a valid hex code, replace the original colors with the new colors
        this.set('palette.color1', color1);
        this.set('palette.color2', color2);
        this.set('palette.color3', color3);
        this.set('palette.color4', color4);
        // ... and send the newly edited palette (with new colors) up to the palette-edit route.
        this.sendAction('editPalette', this.get('palette'));
      } else {
        this.get('flashMessages')
        .danger("Error: Please provide a valid hex code, starting with a '#'");
      }
    },
    cancel () {
      this.get('palette').rollbackAttributes();
      this.sendAction('cancel');
    }
  }
});

// 'cancel' action: When user clicks on 'back' after having edited values but do not submit, roll back the attribute to the previous attributes (from new value to old value). Then, send action up to palette-edit.js/hbs so that the page goes back to the prevous page (palettes view)
