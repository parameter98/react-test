import styles from "./ContentsList.module.css";

const ContentsList = (props) => {
    return(
        <li className={styles.articleList}>
            <div className={styles.articleLeft}>
                <img src="" alt="" />
                <p>{props.companyName}</p>
                <div className="article-left-rank">{props.starRank}stars</div>
            </div>
            <div className={styles.articleRight}>
                <p>{props.articleContents}</p>
                <p>{props.articleDiscription}</p>
            </div>
        </li>
    )
}

export default ContentsList;