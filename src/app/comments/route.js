

// export async function GET(){
//     return Response.json({
//         message: "hellow server",
//         ...comments
//     })
// }

export async function GET(){
    return Response.json(comments,{
        headers:{
            "Set-Cookie": "theme white"
        }
    })
}


export async function POST(request){
    const newComment =await request.json()
    comments.push({
        id: comments.length + 1,
        text: newComment.text
    })
    return Response.json({
        message: "new comments",
        comments
    })
}

const comments = [
    {
        id: 1,
        text: "Commment 1"
    },
    {
        id: 2,
        text: "Comment2"
    }
]