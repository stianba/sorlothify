import React, { Component } from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import UpdateIcon from 'material-ui/svg-icons/action/update';
import Masthead from './components/Masthead/Masthead';
import Section from './components/Section/Section';

const latestNews = [
  {
    title: '- Du møter ikke meg i bokseringen, Knut Arild, for vi er i ulik vektklasse',
    ingress: 'Erna Solbergs treffer fikk stortingssalen til å bryte ut i latter.',
    image: 'http://dbstatic.no/?imageId=63943655&width=1024&height=615',
    weight: 1,
    edition: '',
    posted: '2 min',
    source: {
      name: 'Dagbladet.no',
      icon: 'http://gfx.dagbladet.no/g4/db-logo-square-228.gif'
    },
  },
  {
    title: 'Foreslår å øke renten på studielån',
    ingress: 'Regjeringen foreslår å øke renten på studielån og avvikle reisestipend.',
    image: 'https://gfx.nrk.no/5JQBWXxRi_DZkVUz__Im6g4LcYwwA4D6vaUbG8NoSgiA',
    weight: 1,
    edition: '',
    posted: '7 min',
    source: {
      name: 'NRK',
      icon: 'https://www.nrk.no/serum/latest/views-dist/type/page/img/default.jpg'
    },
  },
  {
    title: 'Ga Aleesami hakeslepp: – Aldri vært borti maken',
    ingress: 'SANDVIKA (NRK): Roberto de Zerbi er den siste treneren i «kaosklubben» Palermo. Men denne gangen har eieren truffet blink, mener Haitam Aleesami.',
    image: 'https://gfx.nrk.no/HtIetDzNqD4qSGBtWLEnZQpF3waOqpaG0cZLxcaFzsNw',
    weight: 1,
    edition: '',
    posted: '15 min',
    source: {
      name: 'NRK',
      icon: 'https://www.nrk.no/serum/latest/views-dist/type/page/img/default.jpg'
    },
  },
  {
    title: 'Her river russisk riking Trump-palass',
    ingress: 'NEW YORK (VG) I 2008 solgte Donald Trump denne luksuseiendommen for 785 millioner kroner. Nå river den nye eieren alt.',
    image: 'https://imbo.vgc.no/users/vgno/images/461275801dae54866fffff8a1bec852e.jpg?t%5B%5D=crop%3Awidth%3D3648%2Cheight%3D2293%2Cx%3D0%2Cy%3D0&t%5B%5D=maxSize%3Awidth%3D654&publicKey=drpublish&accessToken=f9696df4fcb43511ea7cc28d91b442fd2119a67d5b305aabf77c3431a39df31f',
    weight: 1,
    edition: '',
    posted: '23 min',
    source: {
      name: 'VG',
      icon: 'http://1.vgc.no/vgnett-prod/img/vgLogoSquare.png?28042014-1'
    },
  },
  {
    title: 'Venstre raser mot manglende klimatiltak',
    ingress: 'Vestre-leder Trine Skei Grande er ikke fornøyd med Regjeringens tiltak for et grønt skifte. – Hvis regjeringen sier at dette ikke er noe å forhandle på, så har de et kjempestort problem, sier hun.',
    image: 'http://ap.mnocdn.no/drfront/images/f02e5f5ca4b2ddb68d4c2241e431df5a.jpg',
    weight: 1,
    edition: '',
    posted: '2 timer',
    source: {
      name: 'Aftenposten',
      icon: 'http://seniorsaken.no/wp-content/uploads/2015/02/aftenposten-logo.jpg'
    },
  },
];

const featuredNews = [
  {
    title: 'Heard But Not Seen: How Rod Temperton Changed Pop',
    ingress: 'For a foundational architect of late ’70s and early ’80s dance music and a crafter of more than a dozen Hot 100 Top 20 hits, Rod Temperton is striking in his anonymity.',
    image: 'http://cdn2.pitchfork.com/blog/1313/ba7328ea.jpg',
    weight: 1,
    edition: 'featured',
    posted: '2 dager',
    source: {
      name: 'Pitchfork',
      icon: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdJbmOtQrJAGxLnBnQ0JAsYL9hxL_HvQpEBCKpo8arZmz-haMkfQ'
    },
  },
  {
    title: 'Foreslår å øke renten på studielån',
    ingress: 'Regjeringen foreslår å øke renten på studielån og avvikle reisestipend.',
    image: 'https://gfx.nrk.no/5JQBWXxRi_DZkVUz__Im6g4LcYwwA4D6vaUbG8NoSgiA',
    weight: 1,
    edition: '',
    posted: '7 min',
    source: {
      name: 'NRK',
      icon: 'https://www.nrk.no/serum/latest/views-dist/type/page/img/default.jpg'
    },
  },
  {
    title: 'Ga Aleesami hakeslepp: – Aldri vært borti maken',
    ingress: 'SANDVIKA (NRK): Roberto de Zerbi er den siste treneren i «kaosklubben» Palermo. Men denne gangen har eieren truffet blink, mener Haitam Aleesami.',
    image: 'https://gfx.nrk.no/HtIetDzNqD4qSGBtWLEnZQpF3waOqpaG0cZLxcaFzsNw',
    weight: 1,
    edition: '',
    posted: '15 min',
    source: {
      name: 'NRK',
      icon: 'https://www.nrk.no/serum/latest/views-dist/type/page/img/default.jpg'
    },
  },
  {
    title: 'Ga Aleesami hakeslepp: – Aldri vært borti maken',
    ingress: 'SANDVIKA (NRK): Roberto de Zerbi er den siste treneren i «kaosklubben» Palermo. Men denne gangen har eieren truffet blink, mener Haitam Aleesami.',
    image: 'https://gfx.nrk.no/HtIetDzNqD4qSGBtWLEnZQpF3waOqpaG0cZLxcaFzsNw',
    weight: 1,
    edition: '',
    posted: '15 min',
    source: {
      name: 'NRK',
      icon: 'https://www.nrk.no/serum/latest/views-dist/type/page/img/default.jpg'
    },
  },
  {
    title: 'Ga Aleesami hakeslepp: – Aldri vært borti maken',
    ingress: 'SANDVIKA (NRK): Roberto de Zerbi er den siste treneren i «kaosklubben» Palermo. Men denne gangen har eieren truffet blink, mener Haitam Aleesami.',
    image: 'https://gfx.nrk.no/HtIetDzNqD4qSGBtWLEnZQpF3waOqpaG0cZLxcaFzsNw',
    weight: 1,
    edition: '',
    posted: '15 min',
    source: {
      name: 'NRK',
      icon: 'https://www.nrk.no/serum/latest/views-dist/type/page/img/default.jpg'
    },
  },
  {
    title: 'Ga Aleesami hakeslepp: – Aldri vært borti maken',
    ingress: 'SANDVIKA (NRK): Roberto de Zerbi er den siste treneren i «kaosklubben» Palermo. Men denne gangen har eieren truffet blink, mener Haitam Aleesami.',
    image: 'https://gfx.nrk.no/HtIetDzNqD4qSGBtWLEnZQpF3waOqpaG0cZLxcaFzsNw',
    weight: 1,
    edition: '',
    posted: '15 min',
    source: {
      name: 'NRK',
      icon: 'https://www.nrk.no/serum/latest/views-dist/type/page/img/default.jpg'
    },
  },
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Masthead />
          <div style={{ paddingTop: '56px' }}>
            <Section title="Siste nytt" Icon={UpdateIcon} articles={ga(latestNews)} />
            <Section title="SOL anbefaler" Icon={UpdateIcon} articles={ga(featuredNews)} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const ga = (articles) => {
  const maxGroups = 4;
  let groups = [];
  let currentGroup = 0;

  for (const article of articles) {
    let edition = '';

    if (article.edition === 'featured') {
      edition = 'featured';
      currentGroup = currentGroup + 2;
    } else {
      currentGroup++;
    }

    if (currentGroup > maxGroups) {
      groups.reverse();

      for (let i = 0; i < groups.length; i++) {
        if (groups[i].articles.length < 2 && groups[i].edition !== 'featured') {
          groups[i].articles.push(article);
          break;
        }
      }

      groups.reverse();
    } else {
      groups.push({
        edition: edition,
        articles: [article],
      });
    }
  }

  return groups.map((group, k) => {
    const articleCount = group.articles.length;

    const updatedArticles = group.articles.map((article, k) => {
      let size = 'small';

      if (group.edition === 'featured') {
        size = 'large';
      } else if (articleCount === 1) {
        size = 'medium';
      }

      return Object.assign({}, article, { size });
    });

    return Object.assign({}, group, { articles: updatedArticles });
  });
};

const groupArticles = (articles) => {
  const articleCount = articles.length;
  const groupCount = Math.ceil(articleCount / 2);
  let groups = [];
  let currentGroup = -1;
  let articlesInGroup = 0;

  for (const article of articles) {
    if (article.edition === 'featured') {
      groups.push({
        edition: 'featured',
        articles: [article],
      });

      articlesInGroup = 0;
      currentGroup++;
    } else {
      if (articlesInGroup !== 0 && articlesInGroup < Math.floor(articleCount / groupCount)) {
        groups[currentGroup].articles.push(article);
        articlesInGroup++;
      } else {
        groups.push({
          edition: '',
          articles: [article],
        });

        articlesInGroup = 1;
        currentGroup++;
      }
    }
  }

  return groups.map((group, k) => {
    const articleCount = group.articles.length;

    const updatedArticles = group.articles.map((article, k) => {
      let size = 'small';

      if (group.edition === 'featured') {
        size = 'large';
      } else if (articleCount === 1) {
        size = 'medium';
      }

      return Object.assign({}, article, { size });
    });

    return Object.assign({}, group, { articles: updatedArticles });
  });
};

export default App;
