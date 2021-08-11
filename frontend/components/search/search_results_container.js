import { connect } from "react-redux"
import { getWords } from "../../selectors/search"
import SearchResults from "./search_results"

const mapStateToProps = (state, ownProps) => ({
  words: getWords(ownProps)
})

const mapDispatchToProps = dispatch => ({

})

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults)
export default SearchResultsContainer
