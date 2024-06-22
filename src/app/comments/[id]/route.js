

export async function PATCH(request,{params}){
    const index = comments.findIndex((c)=> c.id ===  parseInt(params.id))
    const body =await request.json()
    comments[index] = {
        text: body.text
    }
    return Response.json({
        message: "Updated",
        comments
        
    })
}

export async function DELETE(request,{params}){
    const newCommnet = comments.filter((c)=> c.id !== parseInt(params.id))
    return Response.json({
        message: "deleted",
        newCommnet 
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