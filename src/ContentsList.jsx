
const ContentsList = (props) => {
    return(
        <li className="article-list">
            <div className="article-left">
                <img src="" alt="" />
                <p>{props.companyName}Company-name</p>
                <div className="article-left-rank">{props.starRank}1~5stars</div>
            </div>
            <div className="article-right">
                <p>{props.articleContents}</p>
                <p>{props.articleDiscription}</p>
            </div>
        </li>
    )
}

export default ContentsList;