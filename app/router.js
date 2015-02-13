import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("forums", function() {
    this.resource("topic", {path: '/:forum_id'});
  });
});

export default Router;
