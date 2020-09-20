/** @jsx jsx */
import { jsx, Box, Checkbox, Input, Label, Textarea, Select, Button, Text, Flex } from "theme-ui"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"

export default function ContactPage() {
  return (
    <Layout>
      <PageTitle>Contact</PageTitle>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/contact"
      >
        <input name="bot-field" type="hidden" />
        <input name="form-name" value="contact" type="hidden" />
        <Label htmlFor="name" sx={{ mb: 1 }}>
          Name
        </Label>
        <Input required name="name" id="name-input" sx={{ mb: 3 }} />
        <Label htmlFor="name" sx={{ mb: 1 }}>
          Email
        </Label>
        <Input
          required
          name="email"
          type="email"
          id="email-input"
          sx={{ mb: 3 }}
        />
        <Label htmlFor="affiliation" sx={{ mb: 1 }}>
          Berkeley Affiliation
        </Label>
        <Select name="affiliation" id="affiliation-select" mb={3}>
          <option>Student</option>
          <option>Aspiring Student</option>
          <option>Alumnus</option>
          <option>Faculty / Staff</option>
          <option>Media Partner</option>
          <option>Industry Partner</option>
        </Select>
        <Label htmlFor="topicarea" mb={1}>
          Topic Areas
          </Label>  
        <Select name="topicarea" id="affiliation-select" mb={3}>
          <option>Patent</option>
          <option>Legal</option>
          <option>Intellectual Property</option>
          <option>Courses</option>
          <option>Mentorship</option>
          <option>Alumni</option>
        </Select>
        <br></br>
        <Label htmlFor="message" sx={{ mb: 1 }}>
          Message
        </Label>
        <Textarea
          required
          name="message"
          id="message-textarea"
          rows={8}
          sx={{ mb: 3 }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Layout>
  )
}
