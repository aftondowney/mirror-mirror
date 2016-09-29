import Ember from 'ember';

export default Ember.Route.extend({
  // return all questions
  model() {
    return this.store.findAll('question');
  },
  actions: {
    // make a change to the question
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    saveQuestion(params) {
      // saves a new question
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
  }
});
