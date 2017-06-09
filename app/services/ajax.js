import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
// import ajaxservice: ajax service provides methods to be used to make ajax requests, similar to the way that you would use jquery.ajax. Check 'custom request headers' from github.com/ember-cli/ember-ajax
// we now have access to HTTP verbs (that we use in auth.js) even though we didn't specify them inside of this file. Because of that, this ajax file is pretty small.

// read up on github page to see why we need below setup

import ENV from 'ember-capstone/config/environment';
 // for sending the token, need to call auth.credentials.token
export default AjaxService.extend({
  host: ENV.apiHost,

  auth: Ember.inject.service(), // references auth.js file // auth: Ember.inject.service('auth')
  headers: Ember.computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) { // if there's a token, then assign headers.aiuthorization to that token
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});
