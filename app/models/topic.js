import DS from 'ember-data';

var Topic = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  user: DS.belongsTo('user', {async: true} ),
  messages: DS.hasMany('message', {async: true}),
  forum: DS.belongsTo('forum', {async: true})
});

Topic.reopenClass({
  FIXTURES: [
    {id: 1, forum: 1, name: 'Jimmy McPartland - should he be more famous than Marion?', user: 2, messages: [1,2]},
    {id: 2, forum: 2, name: 'A good movie, or the best movie?', user: 2, messages: [1]},
    {id: 3, forum: 2, name: 'Places in the movie', user: 3, messages: [1]},
    {id: 4, forum: 1, name: 'Fletcher Henderson - too smooth, or just smooth enough?', user: 1, messages: [2] }
  ]
});

export default Topic;
