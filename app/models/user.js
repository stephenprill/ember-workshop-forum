import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  topics: DS.hasMany('topic', {async: true} ),
  messages: DS.hasMany('message', {async: true} )
});

User.reopenClass({
  FIXTURES: [
  {id: 1, username: 'Maddison Hoppe', messages: [1]},
  {id: 2, username: 'Rafaela Schmeler', messages: [2] },
  {id: 3, username: 'Adah Hoeger', messages: [3]}
  ]
});

export default User;
