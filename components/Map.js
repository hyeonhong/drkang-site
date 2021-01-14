import React, { useEffect, useRef } from 'react'

export default function Map({ options }) {
  const mapRef = useRef()

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(mapRef.current, options)
      const marker = new window.google.maps.Marker({ position: options.center, map })

      const infowindow = new window.google.maps.InfoWindow({
        content: `<style> .gm-style-iw > button { display: none !important; } </style>
        <img src="/assets/logo.svg" alt="company logo" height="40" />`
      })
      //  marker.addListener('click', function() {
      //    infowindow.open(map, marker);
      //  });
      infowindow.open(map, marker)
    }

    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`

      document.head.append(script)
      script.addEventListener('load', onLoad)
      return () => script.removeEventListener('load', onLoad)
    } else {
      onLoad()
    }
  }, [])

  return <div style={{ height: '50vh' }} ref={mapRef} />
}

Map.defaultProps = {
  options: {
    center: { lat: 37.660099, lng: 126.770651 },
    zoom: 17,
    mapTypeControl: false
    // disableDefaultUI: true
  }
}
