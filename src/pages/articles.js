/** @jsx jsx */
import {
  jsx,
  Card,
  Heading,
  Text,
  Link,
  Flex,
  IconButton,
  Image,
} from "theme-ui"
import { useState, useEffect } from "react"
import Chip from "../components/chip"
import { graphql } from "gatsby"
import moment from "moment"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const query = graphql`
  query rssQuery {
    allRssJson(sort: { fields: date, order: DESC }) {
      distinct(field: title)
      nodes {
        author
        date
        excerpt
        id
        title
        url
        curated
        feedKey
        image
      }
    }
    allRssConfigsJson {
      nodes {
        feedKey
        title
      }
    }
  }
`

export default function ArticlesPage({ data }) {
  const allArticles = data.allRssJson.nodes
  const allCuratedArticles = allArticles.filter(
    (article) => article.curated === true
  )

  const [curatedArticles, setCuratedArticles] = useState(allCuratedArticles)
  const [articles, setArticles] = useState(allArticles)
  const [activeTags, setActiveTags] = useState([])

  const feedKeysToPossibleTags = {}
  data.allRssConfigsJson.nodes.forEach(
    (rssConfig) => (feedKeysToPossibleTags[rssConfig.feedKey] = rssConfig.title)
  )

  function toggleTag(value) {
    if (activeTags.includes(value)) {
      setActiveTags(activeTags.filter((filter) => filter !== value))
    } else {
      setActiveTags([...activeTags, value])
    }
  }

  function filterArticles() {
    setCuratedArticles(
      allCuratedArticles.filter(
        (article) =>
          article.curated &&
          (activeTags.length === 0 || activeTags.includes(article.feedKey))
      )
    )
    setArticles(
      allArticles.filter(
        (article) =>
          moment(article.date).isSame(moment(), "year") &&
          (activeTags.length === 0 || activeTags.includes(article.feedKey))
      )
    )
  }

  useEffect(filterArticles, [activeTags])

  return (
    <Layout>
      <PageTitle>Articles</PageTitle>
      <Heading sx={{ mb: 2 }} variant="subtitle">
        Sources:
      </Heading>
      <Flex sx={{ flexWrap: "wrap", mb: 4 }} columns={4}>
        {Object.keys(feedKeysToPossibleTags).map((feedKey) => (
          <Chip
            key={feedKey}
            onClick={() => {
              toggleTag(feedKey)
            }}
          >
            {feedKeysToPossibleTags[feedKey]}
          </Chip>
        ))}
      </Flex>
      <Heading sx={{ mb: 3 }}>Curated</Heading>
      {curatedArticles.length > 0 ? (
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          adaptiveHeight={true}
          prevArrow={<ArticleSliderArrow />}
          nextArrow={<ArticleSliderArrow isNext />}
        >
          {curatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} inSlider />
          ))}
        </Slider>
      ) : (
        <Heading as="h3">No articles this month!</Heading>
      )}
      <Heading sx={{ mt: 5, mb: 3 }}>This Year:</Heading>
      {articles.length > 0 ? (
        articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      ) : (
        <Heading as="h3">No articles this year!</Heading>
      )}
    </Layout>
  )
}
ArticlesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

function ArticleCard({ article, inSlider }) {
  console.log(article.image)

  return (
    <Card
      sx={{
        boxShadow: "small",
        mb: 3,
        mx: inSlider ? 1 : "inherit",
        mt: inSlider ? 1 : "inherit",
      }}
    >
      {article.image !== null && (
        <Image
          src={article.image}
          sx={{
            borderRadius: "10px",
            opacity: "90%",
            maxHeight: "300px",
            objectFit: "cover",
            width: "100%",
          }}
        />
      )}
      <Heading variant="cardTitle">
        <Link href={article.url} target="_blank">
          {article.title}
        </Link>
      </Heading>
      <Flex
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Heading variant="subtitle">By {article.author}</Heading>
        <Text sx={{ mr: 2 }}>
          Published {moment(article.date).format("MM/DD/YYYY")}
        </Text>
      </Flex>
      <Text>{article.excerpt}</Text>
    </Card>
  )
}
ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  inSlider: PropTypes.bool,
}

function ArticleSliderArrow({ isNext, onClick }) {
  return (
    <IconButton
      sx={{
        transform: "translate(0, -50%)",
        left: isNext ? "inherit" : -5,
        right: isNext ? -5 : "inherit",
      }}
      onClick={onClick}
    >
      {isNext ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-right-circle"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="9" />
          <line x1="16" y1="12" x2="8" y2="12" />
          <line x1="16" y1="12" x2="12" y2="16" />
          <line x1="16" y1="12" x2="12" y2="8" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-left-circle"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="9" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="12" x2="12" y2="16" />
          <line x1="8" y1="12" x2="12" y2="8" />
        </svg>
      )}
    </IconButton>
  )
}
ArticleSliderArrow.propTypes = {
  isNext: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
}
