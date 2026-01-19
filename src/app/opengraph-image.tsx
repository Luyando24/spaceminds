import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'SpaceMinds | Global Software Development Agency'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          {/* Logo representation */}
          <div
            style={{
              width: 60,
              height: 60,
              background: 'black',
              marginRight: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            S
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: 'black',
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
            }}
          >
            SpaceMinds
          </div>
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#666',
            maxWidth: 800,
            textAlign: 'center',
            lineHeight: 1.4,
            fontWeight: 300,
          }}
        >
          Digital Infrastructure for Global Institutions
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
