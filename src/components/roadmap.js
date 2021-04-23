
/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image, Link } from "theme-ui"
import moment from "moment"
import { StaticQuery, graphql } from "gatsby"

import sep from "../images/separator.png"


export default function RoadmapBlock() {
    const img = <Image src={sep} sx={{maxHeight: "300px", paddingRight: "40px", paddingLeft: "20px", alignSelf: "center"}}></Image>;

    return (
        <Flex sx={{alignItems: "center", justifyContent: "center", width: "100wh", '@media screen and (max-width: 900px)': {display: "none"}}}>
        <Flex sx={{marginTop: "60px", marginRight: "30px", marginLeft: "40px", marginBottom: "70px", justifyContent: "center", flexDirection: "row"}}>
            <Flex sx={{flexDirection: "column"}}>
                <Heading sx={{minWidth: "200px"}}> Campus Life</Heading>
                <RoadLink href="">Classes</RoadLink>
                <RoadLink href="">Events</RoadLink>
                <RoadLink href="">Student Groups</RoadLink>
                <RoadLink href="">Competitions</RoadLink>
                <RoadLink href="">BearX</RoadLink>
                <RoadLink href="">Research</RoadLink>
            </Flex>
            {img}
            <Flex sx={{flexDirection: "column"}}>
                <Heading sx={{minWidth: "200px"}}> Academics</Heading>
                <RoadLink href="">Berkeley-Haas Entrepreneurship Program</RoadLink>
                <RoadLink href="">Blum Center for Developing Economies</RoadLink>
                <RoadLink href="">Intellectual Property & Industry Alliances (IPIRA)</RoadLink>
                <RoadLink href="">Jacobs Institute for Design Innovation</RoadLink>
                <RoadLink href="">Sutardja Center for Entrepreneurship & Technology</RoadLink>
            </Flex>
            {img}
            <Flex sx={{flexDirection: "column"}}>
                <Heading sx={{minWidth: "200px"}}> Accelerate</Heading>
                <RoadLink href="">Big Ideas Contest</RoadLink>
                <RoadLink href="">Citris Foundry</RoadLink>
                <RoadLink href="">NSF I-Corps</RoadLink>
                <RoadLink href="">LAUNCH</RoadLink>
                <RoadLink href="">SkyDeck</RoadLink>
                <RoadLink href="">Startup @ Berkeley Law</RoadLink>
            </Flex>
            {img} 
            <Flex sx={{flexDirection: "column"}}>
                <Heading sx={{minWidth: "200px"}}> Scale</Heading>
                <RoadLink href="">Angels</RoadLink>
                <RoadLink href="">Government Grants</RoadLink>
                <RoadLink href="">NSF I-Corps</RoadLink>
                <RoadLink href="">Incubators</RoadLink>
                <RoadLink href="">Venture Capital</RoadLink>
            </Flex>
        </Flex>
    </Flex>
    )
  }

  const RoadLink = ({href, children}) => (
    <Link href={href} sx={{paddingBottom: "10px"}}>{children}</Link>
  )