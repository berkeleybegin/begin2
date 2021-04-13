
/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image, Link } from "theme-ui"
import moment from "moment"
import { StaticQuery, graphql } from "gatsby"


export default function EventBlock() {
    return (
      <StaticQuery
        query={graphql`
            query EventsBlockQuery {
            allFbJson(sort: { fields: date, order: ASC }) {
              nodes {
                id
                date
                page
                title
                url
              }
            }
          }
        `}
        render={data => {
            const allEventsFb = data.allFbJson.nodes
            const allEvents = allEventsFb.filter((event)=>(moment(event.date).diff(moment(), 'days')>0));
            const display = []
            allEvents.forEach(event => { 
              display.push(
                <Link sx={{fontSize: "1.3rem", paddingBottom: "10px"}} href={event.url}>
                  <strong>{moment(event.date).format("MMMM DD")}</strong>: {event.title}
                </Link>)})
            return (
              <Flex>
              <Flex sx={{padding: "40px", marginLeft: "20px", marginRight: "20px", marginBottom: "40px", flexDirection: "column", '@media screen and (min-width: 1400px)': {paddingLeft: '200px'}}}>
              <Heading sx={{fontSize: "2em", paddingBottom: "20px"}}>Upcoming Events</Heading>
              {display}
              <Link sx={{fontSize: "1.3em", color: "#C4820E", alignItem: "right", paddingTop: "10px"}} href="/events">See More Events >></Link>
              </Flex>
              </Flex>
            );
        }}
      />
    )
  }