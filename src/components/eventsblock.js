
/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image, Link } from "theme-ui"
import moment from "moment"
import { StaticQuery, graphql } from "gatsby"
import { lte } from "lodash"


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
            let allEvents = allEventsFb.filter((event)=>(moment(event.date).diff(moment(), 'days')>0));
            const display = []
            allEvents = allEvents.slice(0, 5);
            allEvents.forEach(event => { 
              display.push(
                <Link sx={{fontSize: "1.2rem", paddingBottom: "10px"}} href={event.url}>
                  <strong>{moment(event.date).format("MMMM DD")}</strong>: {event.title}
                </Link>)})
            return (
              <div sx={{paddingLeft: "40px", marginTop: "30px", marginBottom: "70px", '@media screen and (min-width: 1400px)': {paddingLeft: '0px'}}}>
                <Flex sx={{flexDirection: "column", maxWidth: "1440px", justifyContent: "flex-start", margin: "auto"}}>
                <Heading sx={{fontSize: "2em", paddingBottom: "20px"}}>Upcoming Events</Heading>
                  {display}
                  <Link sx={{fontSize: "1.3em", color: "#C4820E", alignItem: "right", paddingTop: "10px"}} href="/events">See More Events >></Link>
                </Flex>
              </div>
            );
        }}
      />
    )
  }