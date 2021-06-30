
/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image, Link } from "theme-ui"
import moment from "moment"
import { StaticQuery, graphql } from "gatsby"

import sep from "../images/separator.png"
import sepMob from "../images/arrow-mobile.png"


export default function RoadmapBlock() {
    const img = window.innerWidth > 900
        ? <Image src={sep} sx={{maxHeight: "300px", paddingRight: "40px", paddingLeft: "20px", alignSelf: "center"}}></Image>
        : <Image src={sepMob} sx={{maxHeight: "80px", paddingBottom: "20px", alignSelf: "center"}}></Image>

    return (
        <div sx={{paddingLeft: "40px", marginTop: "30px", marginBottom: "70px", '@media screen and (min-width: 1400px)': {paddingLeft: '0px'}}}>
        <Flex sx={{justifyContent: "center", flexDirection: "column", maxWidth: "1440px", margin: "auto"}}>
        <Heading sx={{fontSize: "2em", paddingBottom: "30px", alignSelf: "flex-start"}}>Roadmap</Heading>
        <Flex sx={{marginRight: "30px", flexDirection: "row", '@media screen and (max-width: 900px)': {flexDirection: "column", justifyContent: "center", alignItems: "center"}}}>
            <Flex sx={{flexDirection: "column", '@media screen and (max-width: 900px)': {alignItems: "center"}}}>
                <Heading sx={{paddingBottom:"20px"}}> Campus Life</Heading>
                <RoadLink href="/courses">Classes</RoadLink>
                <RoadLink href="/events">Events</RoadLink>
                <RoadLink href="/directory">Student Groups</RoadLink>
                <RoadLink href="/opportunities">Competitions</RoadLink>
                <RoadLink href="https://bearx.co" target="blank">BearX</RoadLink>
                <RoadLink href="https://vcresearch.berkeley.edu" target="blank">Research</RoadLink>
            </Flex>
            {img}
            <Flex sx={{flexDirection: "column", '@media screen and (max-width: 900px)': {alignItems: "center"}}}>
                <Heading sx={{paddingBottom:"20px"}}> Academics</Heading>
                <RoadLink href="https://entrepreneurship.berkeley.edu" target="blank">Berkeley-Haas Entrepreneurship Program</RoadLink>
                <RoadLink href="https://blumcenter.berkeley.edu/" target="blank">Blum Center for Developing Economies</RoadLink>
                <RoadLink href="https://ipira.berkeley.edu/" target="blank">Intellectual Property & Industry Alliances (IPIRA)</RoadLink>
                <RoadLink href="https://jacobsinstitute.berkeley.edu/" target="blank">Jacobs Institute for Design Innovation</RoadLink>
                <RoadLink href="https://scet.berkeley.edu/" target="blank">Sutardja Center for Entrepreneurship & Technology</RoadLink>
            </Flex>
            {img}
            <Flex sx={{flexDirection: "column", '@media screen and (max-width: 900px)': {alignItems: "center"}}}>
                <Heading sx={{paddingBottom:"20px"}}> Accelerate</Heading>
                <RoadLink href="https://bigideascontest.org/" target="blank">Big Ideas Contest</RoadLink>
                <RoadLink href="https://citrisfoundry.org/" target="blank">Citris Foundry</RoadLink>
                <RoadLink href="https://bayicorps.com/" target="blank">NSF I-Corps</RoadLink>
                <RoadLink href="https://www.uclaunch.com/" target="blank">LAUNCH</RoadLink>
                <RoadLink href="https://skydeck.berkeley.edu/" target="blank">SkyDeck</RoadLink>
                <RoadLink href="https://www.law.berkeley.edu/experiential/startupberkeleylaw/" target="blank">Startup @ Berkeley Law</RoadLink>
            </Flex>
            {img} 
            <Flex sx={{flexDirection: "column", '@media screen and (max-width: 900px)': {alignItems: "center"}}}>
                <Heading sx={{paddingBottom:"20px"}}> Scale</Heading>
                <RoadLink href="/directory">Angels</RoadLink>
                <RoadLink href="/directory">Government Grants</RoadLink>
                <RoadLink href="https://bayicorps.com/" target="blank">NSF I-Corps</RoadLink>
                <RoadLink href="/directory">Incubators</RoadLink>
                <RoadLink href="/directory">Venture Capital</RoadLink>
            </Flex>
        </Flex>
    </Flex>
    </div>
    )
  }

  const RoadLink = ({href, target, children}) => (
    <Link href={href} sx={{paddingBottom: "10px"}} target={target}>{children}</Link>
  )