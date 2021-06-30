/** @jsx jsx */
import { jsx, Card, Heading, Text, Input, Flex, Link } from "theme-ui"
import Chip from "../components/chip"
import { useState, useEffect } from "react"
import { graphql } from "gatsby"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"
import PropTypes from "prop-types"

import "./index.css"

export const query = graphql`
query CoursesPageQuery {
  allCoursesJson {
    distinct(field: courseKey)
    nodes {
      courseKey
      department
      description
      id
      number
      title
      units
    }
  }
}
`

export default function CoursesPage({ data }) {
  const allCourses = data.allCoursesJson.nodes
  const [courses, setCourses] = useState(allCourses)
  const [activeTags, setActiveTags] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const possibleTags = Array.from(
    new Set(allCourses.map((course) => course.department))
  )

  function toggleTag(value) {
    if (activeTags.includes(value)) {
      setActiveTags(activeTags.filter((filter) => filter !== value))
    } else {
      setActiveTags([...activeTags, value])
    }
  }

  function filterCourses() {
    setCourses(
      allCourses.filter(
        (course) =>
          (activeTags.length === 0 || activeTags.includes(course.department)) &&
          (!searchValue ||
            course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            course.number
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase()))
      )
    )
  }

  useEffect(filterCourses, [activeTags, searchValue])

  return (
    <Layout>
      <Flex sx={{justifyContent: "space-between", marginBottom: "0px"}}>
      <PageTitle>Courses</PageTitle>
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
        Departments:
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
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Layout>
  )
}
CoursesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

function CourseCard({ course }) {
  const s = course.number.split(" ").join("%2520");
  return (
    <Card
      sx={{
        boxShadow: "small",
        mb: 3,
      }}
    >
      <Heading variant="cardTitle">    
      <Link 
        href={`https://classes.berkeley.edu/search/class/${s}?retain-filters=1`}
        target="_blank"
        sx= {{textDecoration: "none", color: "inherit"}}
      >
          {course.number}
      </Link>
    </Heading>
      
      <Heading variant="subtitle">{course.title}</Heading>
      <Text
        sx={{
          mb: 2,
        }}
      >
        {course.description}
      </Text>
      <Text
        sx={{
          fontWeight: 800,
          color: "greyText",
        }}
      >
        {course.units} units
      </Text>
    </Card>
  )
}
CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
}
