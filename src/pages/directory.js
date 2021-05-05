/** @jsx jsx */
import { jsx, Card, Heading, Text, Link, Input, Flex, Image} from "theme-ui"
import Chip from "../components/chip"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"
import PropTypes from "prop-types"

import "./index.css"


export const query = graphql`
query resourcesQuery {
  allIrdJson(sort: {fields: title, order: ASC}) {
    nodes {
      description
      title
      url
      tags
      id
      image
    }
    distinct(field: tags)
  }

  allImageSharp(
    filter: { fluid: { originalName: { eq: "resource_placeholder.png" } } }
  ) {
    nodes {
      fluid {
        src
      }
    }
  }
}  
`

export default function ResourcesPage({data}) {
  const allResources = data.allIrdJson.nodes
  const possibleTags = data.allIrdJson.distinct

  const placeholderImage = data.allImageSharp.nodes[0].fluid.src;

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
      <Flex sx={{
        justifyContent: "space-between", 
        marginBottom: "0px",
        '@media screen and (max-width: 600px)': {
          flexDirection: "column",
        }}}>
      <PageTitle>Resources</PageTitle>
      <Input
        placeholder="Search"
        sx={{ 
          mb: 5, 
          width: "50%",
          '@media screen and (max-width: 600px)': {
            width: "100%",
          }
        }}
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
        <ResourceCard key={resource.id} resource={resource} placeholderImage={placeholderImage}/>
      ))}
      </Flex>
    </Layout>
  )
}

function ResourceCard({ resource, placeholderImage}) {
  const shadow = (resource.image) ? "white" : "#C4C4C4";

  return (
    <Flex sx={{
      alignItems: "stretch", 
      mb: 4,

    }}>
        <Image
          src={resource.image || placeholderImage}
          sx= {{
            flexGrow: "1", 
            verticalAlign: "middle", 
            borderRadius: "4px",
            boxShadow: "0 0 4px rgba(0,0,0,.125)",
            marginRight: "7px",
            maxWidth: "150px",
            maxHeight: "9em",
            objectFit: "fill",
            bg: shadow,
            aspectRatio: "1/1",
            '@media screen and (max-width: 600px)': {
              display: "none",
            }
          }}
        />
    <Card
      sx={{
        mb: 4,
        marginBottom: 0,
        width: "65%",
        flexGrow: 3,
        height: "9em",
        '@media screen and (max-width: 600px)': {
          height: "auto",
        }
      }}
    >
          <Heading variant="cardTitle">
            <Link href={resource.url} target="_blank">{resource.title}</Link>
          </Heading>
          <Text>{resource.description}</Text>
    </Card>
    </Flex>
  )
}
ResourceCard.propTypes = {
  resource: PropTypes.object.isRequired,
}
