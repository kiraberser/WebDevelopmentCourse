import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get('title') || 'Título del blog'
    const date = searchParams.get('date') || 'Fecha no disponible'
    const author = searchParams.get('author') || 'Autor desconocido'

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 80px',
            backgroundColor: '#f3f4f6', // bg-gray-100
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          }}
        >
          {/* Título */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#1f2937', // text-gray-800
              lineHeight: 1.2,
              textAlign: 'left',
            }}
          >
            {title}
          </h1>

          {/* Autor y fecha estilo DaisyUI card-footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px',
              borderRadius: '0.5rem',
              backgroundColor: '#ffffff', // bg-white
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', // shadow-lg
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: '#3b82f6', // text-blue-500
              }}
            >
              ✒️ {author}
            </span>
            <span
              style={{
                fontSize: 24,
                color: '#6b7280', // text-gray-500
              }}
            >
              📅 {date}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.error(e)
    return new Response('No se pudo generar la imagen OG', {
      status: 500,
    })
  }
}
