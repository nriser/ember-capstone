import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(), // service() will try to search for storage 'auth'. services can be used Anywhere in your code.
  // userAuth: Ember.inject.service('userAuth'),
  user: Ember.computed.alias('auth.credentials.email'), // in the auth file from above
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'), // isAuthenticated from auth.js

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});

// service: Useful for 3rd party APIs, logging, user/session authentication, etc. Piece of code taht can be used in multiple places in your app. Check to see that you have a 'services' folder. Check services/auth.js.
