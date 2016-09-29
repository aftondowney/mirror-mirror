import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  // calculates how many answers a question has
  var question = params[0];

  return question.get('answers').get('length');
}

export default Ember.Helper.helper(questionPopularity);
