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
    schneet: "#FE2690"
  },
  {
    primary: "Dank Mono",
    secondary: "Helvetica"
  }
);

const images = {
  okay: require("../assets/okay.gif")
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
            Adjusting Your Levels
          </Heading>
          <Text margin="10px 0 0" textColor="schweet" size={1} fit bold caps>
            How to deal with feedback and feedback loops
          </Text>
        </Slide>

        <Slide bgColor="dinky">
          <Heading margin="0 100% 0 0" textColor="t1" size={1} bold>
            Outline
          </Heading>
          <List margin="2rem 0 0 0" bold>
            <ListItem textColor="schneet">What is feedback?</ListItem>
            <ListItem textColor="t6">Why is it important?</ListItem>
            <ListItem textColor="schneet">Types of feedback.</ListItem>
            <ListItem textColor="t6">What is a feedback loop?</ListItem>
            <ListItem textColor="schneet">How to handle feedback.</ListItem>
          </List>
        </Slide>

        <Slide bgColor="danky">
          <Image src={images.okay.replace("/", "")} width="100%" />
        </Slide>

        <Slide bgColor="danky">
          <Heading size={4} textColor="t1" caps>
            What the heck is feedback?
          </Heading>
          <Appear>
            <Text textColor="schweet">
              Data about ourselves and how we are performing.
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="dinky">
          <BlockQuote>
            <Quote textColor="schneet">What do I need feedback for?</Quote>
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
                Who can give me some examples of feedback they've received?
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="danky" textColor="t2">
          <Heading size={4} textColor="t1" caps>
            Types of feedback
          </Heading>
          <List textColor="schweet" margin="2rem 0 0 25%">
            <Appear>
              <ListItem>Asking Questions</ListItem>
            </Appear>
            <Appear>
              <ListItem>Giving Encouragement</ListItem>
            </Appear>
            <Appear>
              <ListItem>Providing Guidance</ListItem>
            </Appear>
            <Appear>
              <ListItem>Sharing Experiences</ListItem>
            </Appear>
            <Appear>
              <ListItem>Showing Appreciation</ListItem>
            </Appear>
          </List>
          <Notes>
            <ul>
              <li>There are plenty of ways to give feedback.</li>
              <li>Who can give me a good example of a type of feedback?</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="dinky" textColor="schweet">
          <Heading textColor="t1" fit>
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
