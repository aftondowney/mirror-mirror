import Ember from 'ember';

export default Ember.Component.extend({
  // Computed property to sort answers alphabetically by author name
  answerSorting: ['author'],
  sortedAnswers: Ember.computed.sort('question.answers', 'answerSorting'),

  actions: {
    // delete an answer
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question question_id');
    }
  }
});
