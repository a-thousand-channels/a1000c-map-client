export default function ({ query, enablePreview }) {
  if (query.layer) {
    enablePreview()
  }
}