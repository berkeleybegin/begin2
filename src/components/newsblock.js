
/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image , Link } from "theme-ui"
import moment from "moment"
import { StaticQuery, graphql } from "gatsby"
import Placeholder from "../images/placeholder.png"


const NewsCard = ({data}) => (
  <Link href={data.url}>
    <Flex sx={{flexDirection: "column", padding: "20px", paddingLeft: "0px", maxWidth: "400px", alignContent: "center"}}>
        <Image src={data.image || Placeholder} sx={{width: "400px", height: "320px", boxShadow: "small", marginBottom: "10px", objectFit: "cover", borderRadius: "10px", '@media screen and (max-width: 1000px)': {width: "400px"}}}/>
        <Text sx={{fontSize: "1.2rem", paddingBottom: "10px"}}>{data.title}</Text>
    </Flex>
  </Link>
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
            let allCuratedNews = allNews.filter(article => article.curated === true)

            allCuratedNews = allCuratedNews.sort((a, b) => moment(b.date).diff(moment(a.date)));
            allCuratedNews = allCuratedNews.slice(0, 4)

            const display = []
            allCuratedNews.forEach(article => { display.push(<NewsCard data={article}></NewsCard>)})
            return (
                <Flex sx={{padding: "40px", marginBottom: "40px", bg: "#f7f7f7", maxWidth: "1440px", margin: "auto", flexDirection: "column", '@media screen and (min-width: 1440px)': {paddingLeft: "0px"}}}>
                <Heading sx={{fontSize: "2em", paddingBottom: "20px"}}>Featured News</Heading>
                <Flex sx={{flexDirection: "row", justifyContent: "flex-start", maxWidth: "1440px", margin: "auto", '@media screen and (max-width: 600px)': {flexDirection: "column"}}}>
                {display}
                </Flex >
                <Link sx={{fontSize: "1.3em", color: "#C4820E", alignItem: "right"}} href="/articles">See More News >></Link>
                </Flex>
            );
        }}
      />
    )
  }

