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
  },
  {
    title: 'Blog',
    image: 'img/book.jpg',
    description: (
      <>
        Blog pages to post various musings about Shadow Priests.
      </>
    ),
  },
  {
    title: 'Guides',
    image: 'img/book.jpg',
    description: (
      <>
        Hub page linking to external guides.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} />
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
