
/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image, Link } from "theme-ui"
import moment from "moment"
import { StaticQuery, graphql } from "gatsby"


export default function OppsBlock() {
    return (
      <StaticQuery
        query={graphql`
            query OppsBlockQuery {
            allOpportunitiesJson(sort: { fields: date, order: ASC }) {
              nodes {
                title
                url
                org
                date
                description
                id
                image
              }
            }
          }
        `}
        render={data => {
            const allOppsData = data.allOpportunitiesJson.nodes
            let allOpps = allOppsData.filter((event)=>(moment(event.date).diff(moment(), 'days')>0));
            allOpps = allOpps.slice(0, 5);
            const display = []
            allOpps.forEach(event => { display.push(
                    <Flex sx={{flexDirection: "column"}}>
                        <Link sx={{fontSize: "1.2em", fontWeight: 600}} href={event.url}>{event.title}</Link>
                        <Text sx={{fontSize: "1.2em", paddingBottom: "10px", fontStyle: "italic"}}>Deadline: {moment(event.date).format("MMMM DD")}</Text>
                    </Flex>
                    )})
            return (
              <div sx={{paddingLeft: '40px', marginTop: "30px", marginBottom: "70px", '@media screen and (min-width: 1400px)': {paddingLeft: '0px'}}}>
                <Flex sx={{flexDirection: "column", margin: "auto", maxWidth: "1440px"}}>
                  <Heading sx={{fontSize: "2em", paddingBottom: "20px"}}>Opportunities and Deadlines</Heading>
                {display}
                <Link sx={{fontSize: "1.3em", color: "#C4820E", alignItem: "right"}} href="/opportunities">See More Opportunities >></Link>
                </Flex>
              </div>
            );
        }}
      />
    )
  }