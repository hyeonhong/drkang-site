export default function Video({ src, width }) {
  return (
    <div style={{ width }}>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          title="Youtube player"
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </div>
  )
}
