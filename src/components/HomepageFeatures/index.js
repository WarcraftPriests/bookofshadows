import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compendium',
    image: 'img/book.jpg',
    description: (
      <>
        Shadow Priest Spell Compendium details how our spells work.
      </>
    ),
    link: 'compendium',
  },
  {
    title: 'Blog',
    image: 'img/scroll.jpg',
    description: (
      <>
        Blog pages to post various musings about Shadow Priests.
      </>
    ),
    link: 'blog',
  },
  {
    title: 'Guides',
    image: 'img/guides.jpg',
    description: (
      <>
        Hub page linking to external guides.
      </>
    ),
    link: 'guides',
  },
];

function Feature({image, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}><img src={image} className={styles.featureSvg} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
