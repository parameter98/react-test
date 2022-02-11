import ContentsList from "./ContentsList";

function Article() {
    return (
        <div className="Scroll-article">
            <ul>
                <ContentsList
                companyName = {"Google"}
                starRank = {5}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
            </ul>
        </div>
    );
}

export default Article;