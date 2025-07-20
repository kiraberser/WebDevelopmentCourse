const { NextResponse } = require("next/server")

const middleware = () => {
    return NextResponse.next()
}

export default middleware

export const config = {
    matcher: ['/news']
}