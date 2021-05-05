/** @jsx jsx */
import { jsx, Card, Heading, Text, Link, Input, Flex, Image, Label, Button} from "theme-ui"
import Chip from "../components/chip"
import { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Footer() {
    return (
      <StaticQuery
        query={graphql`
        query FooterQuery {
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
        }
        `}
        render={data => {
            const allResources = data.allIrdJson.nodes
            const possibleTags = data.allIrdJson.distinct

            const tagDictionary = {}
            possibleTags.forEach(tag => {
                let r = allResources.filter(resource => resource.tags.includes(tag));
                tagDictionary[tag] = r;
            })

            const display = []
            possibleTags.forEach(tag => {
                const elements = []
                tagDictionary[tag].forEach(resource => {
                    elements.push(<Link href={resource.url} sx={{fontSize: "0.9em"}}>{resource.title}</Link>)
                });
                display.push(
                <div sx={{paddingBottom: "20px"}}>
                    <Text sx={{fontSize: "1em", fontWeight: 600}}>{tag}</Text>
                    <Flex sx={{flexDirection: "column"}}>
                    {elements}
                    </Flex>
                </div>);
            })

            // display.push(
            //     <div sx={{paddingBottom: "20px"}}>
            //         <Text sx={{fontSize: "1.2em", fontWeight: 600}}>About Us</Text>
            //         <Text>BEGIN (Berkeley Gateway to Innovation) is the University of California, Berkeley’s directory of innovation and entrepreneurship resources and hub for events, news and opportunities. For questions about how to find the best resource for your situation, contact begin@berkeley.edu.</Text>
            //     </div>
            // )

            return (
                <div sx={{width: "100wh", bg: "#eeeeee"}}>
            <Flex sx={{padding: "40px", marginBottom: "40px", maxWidth: "1440px", margin: "auto", flexDirection: "column", '@media screen and (min-width: 1400px)': {paddingLeft: "0px"}}}>
                <Heading sx={{fontSize: "2em", paddingBottom: "20px"}}>Directory</Heading>
                <Flex sx={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                    <div>
                        {display.slice(0, 3)}
                    </div>
                    <div>
                    {display.slice(4, 5)}
                    </div>
                    <div>
                    {display.slice(3, 4)}
                    {display.slice(5, 7)}
                    </div>
                </Flex>
                <Flex sx={{flexDirection: "row", paddingTop: "10px", justifyContent: "space-between"}}>
                <div sx={{paddingBottom: "20px", width: "50%", paddingRight: "30px"}}>
                     <Text sx={{fontSize: "1.2em", fontWeight: 600}}>About Us</Text>
                     <Text>BEGIN (Berkeley Gateway to Innovation) is the University of California, Berkeley’s directory of innovation and entrepreneurship resources and hub for events, news and opportunities. For questions about how to find the best resource for your situation, contact begin@berkeley.edu.</Text>
                </div>
                <Flex sx={{width: "50%", flexDirection: "column", paddingLeft: "10px"}}>
                    <Text sx={{fontWeight: 600, paddingBottom: "10px"}}>Subscribe to Our Newsletter!</Text>
                    <form
                        name="newsletter"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        action="/newsletter"
                    >
                        <input name="bot-field" type="hidden" />
                        <input name="form-name" value="contact" type="hidden" />
                            <Input
                            required
                            name="email"
                            type="email"
                            id="email-input"
                            placeholder="Your Email"
                            sx={{width: "40%", display: "inline", marginRight: "5px"}}
                            />
                            <Button type="submit">Sign Me Up!</Button>
                    </form>
                </Flex>
                </Flex>
            </Flex>
            </div>
            );
        }}
      />
    )
  }

