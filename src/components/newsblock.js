
/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image , Link } from "theme-ui"
import moment from "moment"
import { StaticQuery, graphql } from "gatsby"
import Placeholder from "../images/logo_graphic.png"


const NewsCard = ({data}) => (
    <Flex sx={{flexDirection: "column", padding: "20px", maxWidth: "330px", alignContent: "center"}}>
        <Image src={data.image || Placeholder} sx={{width: "330px", height: "280px", boxShadow: "small", marginBottom: "10px", objectFit: "cover", borderRadius: "10px"}}/>
        <Text sx={{fontSize: "1.4em", paddingBottom: "10px"}}>{data.title}</Text>
    </Flex>
)

export default function NewsBlock() {
    return (
      <StaticQuery
        query={graphql`
        query NewsBlockQuery {
        allRssJson {
            distinct(field: title)
            nodes {
              author
              date
              excerpt
              id
              title
              url
              feedKey
              curated
              image
            }
          }
        }
        `}
        render={data => {
            const allNews = data.allRssJson.nodes
            console.log(allNews)
            const allCuratedNews = allNews.filter(article => article.curated === true)
            console.log(allCuratedNews)
            const display = []
            allCuratedNews.forEach(article => { display.push(<NewsCard data={article}></NewsCard>)})
            console.log(display)
            return (
                <Flex sx={{padding: "40px", marginLeft: "20px", marginRight: "20px", marginBottom: "40px", flexDirection: "column", boxShadow: "large"}}>
                <Heading sx={{fontSize: "2em", paddingBottom: "20px"}}>Featured News</Heading>
                <Flex sx={{flexDirection: "row", justifyContent: "space-around"}}>
                {display}
                </Flex >
                <Link sx={{fontSize: "1.3em", color: "#C4820E", alignItem: "right"}} href="/articles">See More News >></Link>
                </Flex>
            );
        }}
      />
    )
  }

