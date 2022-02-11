import ContentsList from "./ContentsList";
import styles from "./Article.module.css";

function Article() {
    return (
        <div className={styles.Article}>
            <ul>
                <ContentsList
                companyName = {"Google"}
                starRank = {5}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
                <ContentsList
                companyName = {"Meta"}
                starRank = {3}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
                <ContentsList
                companyName = {"Netflix"}
                starRank = {3}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
                <ContentsList
                companyName = {"Disney"}
                starRank = {3}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
                <ContentsList
                companyName = {"Microsoft"}
                starRank = {3}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
                <ContentsList
                companyName = {"Apple"}
                starRank = {3}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
                <ContentsList
                companyName = {"Tesla"}
                starRank = {3}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
                <ContentsList
                companyName = {"Starbucks"}
                starRank = {3}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
                <ContentsList
                companyName = {"Meta"}
                starRank = {3}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />
                <ContentsList
                companyName = {"Meta"}
                starRank = {3}
                articleContents = {"this is content"}
                articleDiscription = {"this is description"}
                />

            </ul>
        </div>
    );
}

export default Article;