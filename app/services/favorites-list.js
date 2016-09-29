import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],
  // adds a question to favorites list
  add(question) {
    this.get('questions').pushObject(question);
  }
});
