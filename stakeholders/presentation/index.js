// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import preloader from "../utils/preloader";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#d4d4dc",
    dinky: "#393f4d",
    danky: "#1d1e22",
    screet: "#d4d4dc",
    thweet: "#feda6a",
    schweet: "#6adaff",
    saaweet: "#fe9626",
    t1: "#f1f0ee",
    t2: "#7acfd6",
    t3: "#4ABDAC",
    t4: "#FC4A1A",
    t5: "#F7B733",
    t6: "#DFDCE3",
    t7: "#FE59C2",
    t8: "#DC37A0"
  },
  {
    primary: "Dank Mono",
    secondary: "Helvetica"
  }
);

const images = {
  bighead: require("../assets/bighead.gif")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide transition={["zoom"]} bgColor="danky">
          <Heading size={1} lineHeight={1} textColor="t1" fit caps>
            How to talk to peoples
          </Heading>
          <Text margin="10px 0 0" textColor="t2" size={1} fit bold caps>
            Stakeholders, Steak-holders, and everyone in between
          </Text>
        </Slide>

        <Slide bgColor="dinky">
          <Heading margin="0 100% 0 0" textColor="t1" size={1} bold>
            Outline
          </Heading>
          <List margin="2rem 0 0 0" bold>
            <ListItem textColor="t7">Communication problems.</ListItem>
            <ListItem textColor="t8">Why are they important?</ListItem>
            <ListItem textColor="t7">
              Why do we need to talk to people?
            </ListItem>
            <ListItem textColor="t8">What is a stakeholder?</ListItem>
            <ListItem textColor="t7">What is a steak-holder?</ListItem>
            <ListItem textColor="t8">How do we talk to people?</ListItem>
          </List>
        </Slide>

        <Slide bgColor="danky">
          <Image src={images.bighead.replace("/", "")} width="100%" />
        </Slide>

        <Slide bgColor="dinky">
          <BlockQuote>
            <Quote textColor="t5">Why me talk people? I am devloper...</Quote>
            <Cite textColor="t6">Lots of people in our industry</Cite>
          </BlockQuote>
          <Notes>
            <ul>
              <li>
                This is a fairly average stance among developers and other
                tech-savvy humans.
              </li>
              <li>This is also an important question.</li>
              <li>
                Who can give me some examples of communication problems they've
                seen?
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="danky" textColor="t2">
          <Heading size={4} textColor="t1" caps>
            Reasons to talk to people
          </Heading>
          <List margin="2rem 0 0 25%">
            <ListItem>Accountability</ListItem>
            <ListItem>Approachability</ListItem>
            <ListItem>Common Interests</ListItem>
            <ListItem>Empathy</ListItem>
            <ListItem>Rapport</ListItem>
          </List>
          <Notes>
            <ul>
              <li>
                There are plenty of reasons to talk to other people, these are
                just a few.
              </li>
              <li>
                Who can give me a good reason (business or otherwise) to talk to
                someone?
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="dinky" textColor="t2">
          <Heading size={4} textColor="t1" caps fit>
            Stakeholder vs. Steak-holder
          </Heading>
          <Appear transitionDuration="125">
            <Heading size={2} textColor="t7" caps fit>
              FIGHT!
            </Heading>
          </Appear>
          <Notes>
            <ul>
              <li>Can anyone tell me what a stakeholder is?</li>
              <li>
                A person with an interest or concern in what you are doing.
              </li>
              <li>Can anyone tell me what a steak-holder is?</li>
              <li>
                Someone who holds your steak, a waiter or waitress perhaps.
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="danky" textColor="t2">
          <Heading size={4} textColor="t1" caps fit>
            How the heck do we talk to these people?
          </Heading>
          <Notes>
            <ul>
              <li>Can anyone tell me what a stakeholder is?</li>
              <li>
                A person with an interest or concern in what you are doing.
              </li>
              <li>Can anyone tell me what a steak-holder is?</li>
              <li>
                Someone who holds your steak, a waiter or waitress perhaps.
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="dinky" textColor="t2">
          <Heading fit>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
