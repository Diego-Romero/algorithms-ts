function isValidState(state) {
  return true;
}

function getCandidates(state) {
  return [];
}

function search(state, solutions) {
  if (isValidState(state)) {
    solutions.push([...state]);
  }
  for (candidate in getCandidates(state)) {
    state.add(candidate);
    search(state, solutions);
    state.delete(candidate);
  }
}

function backTrackingProblem() {
  const solutions = [];
  const state = new Set();
  search(state, solutions);
  return solutions;
}
