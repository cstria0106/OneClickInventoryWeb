import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '간편하게 옷장 만들기',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        One-Click Inventory를 사용하면 클릭 몇 번 만으로 아바타에 옷장을 만들 수 있습니다.
      </>
    ),
  },
  {
    title: '애니메이션 자동 생성',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        복잡한 유니티 애니메이션을 알지 못하더라도 옷장을 만들 수 있고, 귀찮은 애니메이터 작업과 애니메이션 클립 녹화 작업을 하지 않아도 됩니다.
      </>
    ),
  },
  {
    title: '확장성 / 부가기능',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        단순한 int, bool 옷장과 더불어 블렌드 셰이프 설정 기능, 매터리얼 설정 기능을 제공합니다. 또한 메뉴 아이콘을 자동으로 생성할 수 있고 파라미터를 필요한 만큼만 사용하도록 최적화 해줍니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
