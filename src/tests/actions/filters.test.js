import { setTextFilter, sortByDate, sortByTitle } from "../../actions/filters";

test('should setup set text filter action with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should setup set text filter with provided ', () => {
  
})

