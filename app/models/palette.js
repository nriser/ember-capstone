import DS from 'ember-data';

export default DS.Model.extend({
  color1: DS.attr('string'),
  color2: DS.attr('string'),
  color3: DS.attr('string'),
  color4: DS.attr('string')
});

// relationship to user is defined in the backend
