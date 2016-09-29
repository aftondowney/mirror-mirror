import Ember from 'ember';

export default Ember.Route.extend({
  // retrieves question by id
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer3(params) {
      // creates a new answer
      var newAnswer = this.store.createRecord('answer', params);
      // link an answer to its question
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      // return to question detail page
      this.transitionTo('question', params.question);
    },
    // delete a question
    destroyEntry(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
