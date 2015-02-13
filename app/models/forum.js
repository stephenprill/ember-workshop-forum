import DS from 'ember-data';

var Forum = DS.Model.extend({
  name: DS.attr('string'),
  info: DS.attr('string'),
  topics: DS.hasMany('topic', {async: true} )
});

Forum.reopenClass({
  FIXTURES: [
  {
    id: 1,
    name: 'Jazz between WW1 and WW2',
    info: 'Talk about Jazz in the 20s and 30s',
    topics: [1,4]
  },
  {
    id: 2,
    name: 'When Harry Met Sally',
    info: 'Talk about best movie ever made, No haters',
    topics: [1,4]
  }
  ]
});
