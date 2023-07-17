import ContentLoader from 'react-content-loader'

const ProductInfoLoader = () => (
  <ContentLoader viewBox="0 0 320 280" height={280} width={320}>
    <rect x="0" y="0" rx="10" ry="10" width="280" height="180" />
    <rect x="0" y="190" rx="0" ry="0" width="280" height="20" />
    <rect x="0" y="215" rx="0" ry="0" width="239" height="20" />
    <rect x="0" y="242" rx="0" ry="0" width="274" height="20" />
  </ContentLoader>
)

ProductInfoLoader.metadata = {
  name: 'RJavlonbek',
  github: 'RJavlonbek',
  description: 'Blog item',
  filename: 'BlogItem',
}

export default ProductInfoLoader