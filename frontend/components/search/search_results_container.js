import { connect } from "react-redux"
import { fetchSearchedSnacks, refreshSearchedSnacks, sortByAscendingPrice, sortByDescendingPrice, sortByRating, sortByRelevance, sortByReviews } from "../../actions/snack_actions"
import { getSearchedSnacks, getWords } from "../../selectors/search"
import SearchResults from "./search_results"

const mapStateToProps = (state, ownProps) => ({
  words: getWords(ownProps),
  searchedSnacks: getSearchedSnacks(state)
})

const mapDispatchToProps = dispatch => ({
  fetchSearchedSnacks: words => dispatch(fetchSearchedSnacks(words)),
  refreshSearchedSnacks: () => dispatch(refreshSearchedSnacks()),
  sortByRelevance: () => dispatch(sortByRelevance()),
  sortByAscendingPrice: () => dispatch(sortByAscendingPrice()),
  sortByDescendingPrice: () => dispatch(sortByDescendingPrice()),
  sortByRating: () => dispatch(sortByRating()),
  sortByReviews: () => dispatch(sortByReviews())
})

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults)
export default SearchResultsContainer
