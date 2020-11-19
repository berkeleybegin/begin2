/** @jsx jsx */
import { jsx, Card, Heading, Text, Link, Flex, Divider } from "theme-ui"
import { graphql } from "gatsby"
import moment from "moment"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"
import PropTypes from "prop-types"

export const query = graphql`
  query EventsPageQuery {
    allFbJson(sort: { fields: date, order: ASC }) {
      distinct(field: title)
      nodes {
        id
        date
        description
        location
        page
        title
        url
      }
    }
  }
`

export default function EventsPage({ data }) {
  const allEventsFb = data.allFbJson.nodes

  const allEvents = allEventsFb.filter((event)=>(moment(event.date).diff(moment(), 'days')>0));
  const closestEvent = allEvents[0];
  console.log(allEvents.length)
  return (
    <Layout>
      <PageTitle>Events</PageTitle>
      {allEvents.length === 0 ? (
        <Heading as="h3">No events at the moment!</Heading>
      ) : (
        <div>
          <Heading sx={{ mb: 3 }}>Closest Deadline</Heading>
          <EventCard isClosest event={closestEvent} />
          <Heading sx={{ mb: 3 }}>Upcoming</Heading>
          {allEvents.length === 1 ? (
            <Heading as="h3">No other events at the moment!</Heading>
          ) : (
            allEvents
              .slice(1)
          .map((event) => <EventCard key={event.id} event={event} />)
          )}
        </div>
      )}
    </Layout>
  )
}
EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

function EventCard({ isClosest, event }) {
  const now = Date();
  return (
    <Card
      key={event.id}
      sx={{
        mb: isClosest ? 5 : 3,
        boxShadow: isClosest ? "large" : "small",
      }}
    >
      <Heading variant="cardTitle" sx={{ mt: isClosest ? 3 : "inherit" }}>
        <Link href={event.url} target="_blank">{event.title}</Link>
      </Heading>
      <Flex
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Text sx={{ mr: 2 }}>
          Due <div sx={{fontWeight: 600, display: "inline"}}> {moment(event.date).format('MMM D, YYYY')} </div>| In {moment(event.date).diff(moment(), 'days')} Days
        </Text>
        {/* <Text sx={{paddingRight: '10px'}}>At {event.location}</Text> */}
      </Flex>
      <br></br>
      <Text>{event.description}</Text>
    </Card>
  )
}
EventCard.propTypes = {
  isClosest: PropTypes.bool,
  event: PropTypes.object.isRequired,
}
