// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  thisIsFine: require('../assets/this-is-fine.gif'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#03A9FC',
    secondary: '#333',
    tertiary: '#DEE',
    quaternary: '#CECECE',
  },
  {
    primary: 'Dank Mono',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} fit caps lineHeight={1} textColor="secondary">
            Project Spotlight:
          </Heading>
          <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
            Anthem
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} lineHeight={2} textColor="primary" caps>
            Outline
          </Heading>
          <Heading size={3} textColor="secondary">
            What is Anthem?
          </Heading>
          <Heading size={3} textColor="secondary">
            Pre-Slalom Anthem
          </Heading>
          <Heading size={3} textColor="secondary">
            Current-State Anthem
          </Heading>
          <Heading size={3} textColor="secondary">
            Post-Slalom Anthem
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>
            What is Anthem?
          </Heading>
          <List textAlign="center">
            <ListItem>Health Care / Health Insurance</ListItem>
            <ListItem>33rd on the Fortune 500 (2018)</ListItem>
            <ListItem>Employs around 64,000 humans</ListItem>
            <ListItem>Approximately 800k customers</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          {/* <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote> */}
          <Heading size={2} textColor="primary" caps>
            Pre-Slalom Anthem
          </Heading>
          <Text textColor="tertiary">Waterfall, COBOL on mainframe, green screens, DB2, TableBase, FTP + Batch Jobs, Selenium.</Text>
          <Text textColor="tertiary">3-6 month turn-around on bugfixes</Text>
        </Slide>

        <Slide bgImage={images.thisIsFine}></Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps fit>
            Current-State Anthem
          </Heading>
          <Text textColor="tertiary">Agile, Java on EKS, ReactJS frontend, DB2, Redis, S3 + Lambdas, CodeceptJS.</Text>
          <Text textColor="tertiary">Weekly turn-around on bugfixes</Text>
        </Slide>

        <Slide bgImage={images.goodWork}></Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps>
            Post-Slalom Anthem
          </Heading>
          <Text textColor="tertiary">Agile, Java on EKS, ReactJS frontend, RDS, Redis, S3 + Lambdas, CodeceptJS.</Text>
          <Text textColor="tertiary">Daily turn-around on bugfixes</Text>
        </Slide>

        <Slide transition={['zoom']}>
          <Heading size={1} caps fit>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
