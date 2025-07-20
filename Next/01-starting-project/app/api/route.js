
const GET = (request) => {
    console.log(request)

    return new Response('Get Response')
}

const POST = (request) => {
    console.log(request)

    return new Response('Post Response')
}