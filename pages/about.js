import withTexts from 'utils/hoc/withTexts'

const About = ({ texts }) => {
  return <div>{texts}</div>
}

About.displayName = 'About'

export default withTexts(About)
