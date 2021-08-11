import { connect } from "react-redux"
import { fetchSearchedSnacks } from "../../actions/snack_actions"
import { getSearchedSnacks, getWords } from "../../selectors/search"
import SearchResults from "./search_results"

const mapStateToProps = (state, ownProps) => ({
  words: getWords(ownProps),
  searchedSnacks: getSearchedSnacks(state)
})

const mapDispatchToProps = dispatch => ({
  fetchSearchedSnacks: words => dispatch(fetchSearchedSnacks(words))
})

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults)
export default SearchResultsContainer
