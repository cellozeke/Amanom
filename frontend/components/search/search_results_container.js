import { connect } from "react-redux"
import { fetchSearchedSnacks, refreshSearchedSnacks } from "../../actions/snack_actions"
import { getSearchedSnacks, getWords } from "../../selectors/search"
import SearchResults from "./search_results"

const mapStateToProps = (state, ownProps) => ({
  words: getWords(ownProps),
  searchedSnacks: state.entities.search
})

const mapDispatchToProps = dispatch => ({
  fetchSearchedSnacks: words => dispatch(fetchSearchedSnacks(words)),
  refreshSearchedSnacks: () => dispatch(refreshSearchedSnacks())
})

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults)
export default SearchResultsContainer
