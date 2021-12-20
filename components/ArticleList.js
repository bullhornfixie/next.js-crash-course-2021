import ArticleItem from './ArticleItem.js'
import articleStyles from '../styles/Article.module.css'

// import articles as object 
// map out each item in object 
// ArticleItem provides a link + styling component 

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
              {articles.map((article, i) => (
                <ArticleItem key={i} article={article} />
              ))}
        </div>
    )
}

export default ArticleList