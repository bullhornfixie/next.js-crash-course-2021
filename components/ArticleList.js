import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
              {articles.map((article, i) => (
                <h3 key={i}>{article.title}</h3>
              ))}
        </div>
    )
}

export default ArticleList