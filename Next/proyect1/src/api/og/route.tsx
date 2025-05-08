import { ImageResponse } from 'next/og'

export const runtime = "edge"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const title = searchParams.get("title")?.slice(0, 100) || "Blog Post"
        const date = searchParams.get("date") || new Date().toLocaleDateString()
        const author = searchParams.get("author") || "Anonymous"

        return new ImageResponse(
            <div tw="flex flex-col w-full h-full items-center justify-center bg-[#1a1a1a]">
                <div tw="flex flex-col w-full h-full p-12">
                    {/* Logo o marca */}
                    <div tw="flex items-center mb-8">
                        <div tw="text-white text-2xl font-bold">Mi Blog</div>
                    </div>

                    {/* Contenido principal */}
                    <div tw="flex flex-col flex-1 justify-center">
                        <h1 tw="text-5xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h1>
                        <div tw="flex items-center text-white/90">
                            <div tw="flex items-center">
                                <svg style={{ width: '24px', height: '24px', marginRight: '8px' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                                </svg>
                                <span tw="text-lg">{author}</span>
                            </div>
                            <span tw="mx-4">•</span>
                            <span tw="text-lg">{date}</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div tw="flex items-center justify-between mt-8">
                        <div tw="flex items-center text-white/80">
                            <span tw="text-lg">Leer más en nuestro blog</span>
                        </div>
                        <div tw="flex items-center">
                            <div tw="w-3 h-3 rounded-full bg-white/90 mr-2"></div>
                            <div tw="w-3 h-3 rounded-full bg-white/90 mr-2"></div>
                            <div tw="w-3 h-3 rounded-full bg-white/90"></div>
                        </div>
                    </div>
                </div>
            </div>,
            {
                width: 1200,
                height: 630,
            }
        )
    } catch (e: any) {
        console.error('Error generating OG image:', e)
        return new Response(`Failed to generate image: ${e.message}`, { status: 500 })
    }
}