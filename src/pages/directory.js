/** @jsx jsx */
import { jsx, Card, Heading, Text, Link, Input, Flex } from "theme-ui"
import Chip from "../components/chip"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"
import PropTypes from "prop-types"


export const query = graphql`
query resourcesQuery {
  allIrdJson(sort: {fields: title, order: ASC}) {
    nodes {
      description
      title
      url
      tags
      id
    }
    distinct(field: tags)
  }
}  
`

export default function ResourcesPage({data}) {
  const allResources = data.allIrdJson.nodes
  const possibleTags = data.allIrdJson.distinct

  const [resources, setResources] = useState(allResources)
  const [activeTags, setActiveTags] = useState([])
  const [searchValue, setSearchValue] = useState("")

  function toggleTag(value) {
    if (activeTags.includes(value)) {
      setActiveTags(activeTags.filter((filter) => filter !== value))
    } else {
      setActiveTags([...activeTags, value])
    }
  }

  function filterResources() {
    setResources(
      allResources.filter(
        (resource) =>
          (activeTags.length === 0 ||
            activeTags.some((tag) => resource.tags.includes(tag))) &&
          (!searchValue ||
            resource.title.toLowerCase().includes(searchValue.toLowerCase()))
      )
    )
  }

  useEffect(filterResources, [activeTags, searchValue])

  return (
    <Layout>
      <Flex sx={{justifyContent: "space-between", marginBottom: "0px"}}>
      <PageTitle>Directory</PageTitle>
      <Input
        placeholder="Search"
        sx={{ mb: 5, width: "50%"}}
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
      />
      </Flex>
      {/* <Heading sx={{ mb: 2 }} variant="subtitle">
        Types:
      </Heading> */}
      <Flex sx={{ flexWrap: "wrap", mb: 4 }} columns={4}>
        {possibleTags.map((tag) => (
          <Chip
            key={tag}
            onClick={() => {
              toggleTag(tag)
            }}
          >
            {tag}
          </Chip>
        ))}
      </Flex>
      <Flex sx={{flexWrap: 'wrap', flexBasis: '50%'}}>
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
      </Flex>
    </Layout>
  )
}

function ResourceCard({ resource }) {
  return (
    <Card
      sx={{
        mb: 4,
      }}
    >
      <Heading variant="cardTitle">
        <Link href={resource.url}>{resource.title}</Link>
      </Heading>
      <Text>{resource.description}</Text>
    </Card>
  )
}
ResourceCard.propTypes = {
  resource: PropTypes.object.isRequired,
}
