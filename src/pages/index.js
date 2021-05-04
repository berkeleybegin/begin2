/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image } from "theme-ui"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import "./index.css"

import mainImage from "../images/begin-hero.png"
import berkImage from "../images/berkeley.jpg"
import bg from "../images/bg.png"

import EventBlock from "../components/eventsblock";
import NewsBlock from "../components/newsblock"
import OppsBlock from "../components/oppsblock"
import CourseBlock from "../components/coursesblock"
import RoadmapBlock from "../components/roadmap"

import Footer from "../components/footer"

import CountUp from "react-countup"

function Paragraph({ children }) {
  return (
    <Text
      sx={{
        fontSize: 3,
        mb: 3,
      }}
    >
      {children}
    </Text>
  )
}
Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

const NumBlock = () => (
  <Flex sx={{bg: "#003262", justifyContent: "center"}}>
    <Flex 
    sx={{
      flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "space-around", 
      textAlign: "center", color: "white", padding: ["50px", "70px"], marginTop: "40px", marginBottom: "40px", width: "100%", '@media screen and (max-width: 700px)': {flexDirection: 'column'}, '@media screen and (min-width: 1200px)': {maxWidth: '1400px'}}}
      >
      <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}> <Heading sx={{fontSize: "3em", padding: 0, margin: 0}}>#1</Heading>Public University</Text>
      <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}> <Heading sx={{fontSize: "3em", padding: 0, margin: 0}}>#2</Heading>University for Entrepreneurs</Text>
      <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}> <Heading sx={{fontSize: "3em", padding: 0, margin: 0, gap: "12px"}}>#4</Heading>in Most Successful Founders</Text>

      <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}><Heading sx={{fontSize: "3em", padding: 0, margin: 0}}><CountUp end={1652} duration={2}/></Heading>Startup Founders</Text>
      <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}><Heading sx={{fontSize: "3em", padding: 0, margin: 0}}><CountUp end={1481} duration={2}/></Heading>Startups</Text>
      <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}><Heading sx={{fontSize: "3em", padding: 0, margin: 0}}>$<CountUp end={779.8} duration={2}/>M</Heading>in Research Funding</Text>

      <Text sx={{flexBasis: "33%", paddingBottom: "10px"}}><Heading sx={{fontSize: "3em", padding: 0, margin: 0}}><CountUp end={1649} duration={2}/></Heading>Active Inventions</Text>
      <Text sx={{flexBasis: "33%", paddingBottom: "10px"}}><Heading sx={{fontSize: "3em", padding: 0, margin: 0}}><CountUp end={774} duration={2}/></Heading>Active Patents</Text>
      <Text sx={{flexBasis: "33%", paddingBottom: "10px"}}><Heading sx={{fontSize: "3em", padding: 0, margin: 0}}><CountUp end={814} duration={2}/></Heading>Active Foreign Patents</Text>
    </Flex>
  </Flex>
)

const EntryPage = () => (
  <Flex sx={{height: "100vh", minHeight: "300px", alignItems: "center", justifyContent: "center", flexDirection: "column", 
            background: `url(${mainImage}) no-repeat center center fixed`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', objectFit: 'contain',
            }}>
    <Heading sx={{fontSize: "3rem", color: "white", fontWeight: 200, '@media screen and (max-width: 800px)': {marginLeft: "20px"}}}>Welcome to the</Heading>
    <Heading sx={{fontSize: "3rem", color: "white", fontWeight: 200, '@media screen and (max-width: 800px)': {marginLeft: "20px"}}}><b>Be</b>rkeley <b>G</b>ateway to <b>In</b>novation</Heading> 
  </Flex> 
)

const WhyBlock = () => (
  <Flex sx={{flexDirection: "row", justifyContent: "center"}}>
  <Flex sx={{height: "70vh", justifyContent: "space-between", flexDirection: "row", alignItems: "center", padding: "40px", '@media screen and (max-width: 700px)': {flexDirection: 'column', height: 'auto'}, '@media screen and (min-width: 1400px)': {maxWidth: '1400px'}}}>
    <div sx={{flexBasis: "50%", paddingBottom: '20px'}}>
      <Heading sx={{fontSize: "2rem"}}>Why Berkeley?</Heading>
      <Text sx={{fontSize: "1.2rem"}}>The University of California, Berkeley is home to one of the most vibrant innovation ecosystems in the world. In 2020, Pitchbook ranked UC Berkeley as the #2 university for entrepreneurship. As of 2020, alumni startups have raised more than $36B in venture capital and helped create the world’s most valuable companies such as Apple, Softbank, Intel, Gap eBay, Tesla, and many more.</Text>
    </div>
    <Image src={berkImage} sx={{objectFit: "contain", width: "400px", backgroundColor: `rgba(253, 181, 21, 0.75)`, backgroundBlendMode: "screen multiply", borderRadius: "4px"}}></Image>
  </Flex>
  </Flex>
)


export default function HomePage() {
  return (
    <Layout padding="10000">
      <link rel="stylesheet" href="https://use.typekit.net/gom7rch.css"></link>
      <EntryPage />
      <WhyBlock />
      <NumBlock />
      <RoadmapBlock />
      <div sx={{background: `url(${bg}) center center`, backgroundRepeat: "repeat"}}>
        <EventBlock />
        <NewsBlock />
        <OppsBlock />
        <CourseBlock />
      </div>
      <Footer />
    </Layout>
  )
}