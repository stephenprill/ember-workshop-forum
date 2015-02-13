import DS from 'ember-data';

var Message = DS.Model.extend({
  text: DS.attr('string'),
  user: DS.belongsTo('user', {async: true}),
  topic: DS.belongsTo('topic', {async: true})
});

Message.reopenClass({
  FIXTURES: [
  {id: 1, topic: 1, user: 1, text: 'Um.... Definitely just smooth enough.'},
  {id: 2, topic: 1, user: 2, text: 'Agreed.'},
  {id: 3, topic: 2, user: 3, text: 'Firsties!!  Haha.  pwned.'}
  ]
});

export default Message;
