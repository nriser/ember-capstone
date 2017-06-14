import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
// import ajaxservice: ajax service provides methods to be used to make ajax requests, similar to the way that you would use jquery.ajax. Check 'custom request headers' from github.com/ember-cli/ember-ajax
// we now have access to HTTP verbs (that we use in auth.js) even though we didn't specify them inside of this file. Because of that, this ajax file is pretty small.

import ENV from 'ember-capstone/config/environment';

export default AjaxService.extend({

});
