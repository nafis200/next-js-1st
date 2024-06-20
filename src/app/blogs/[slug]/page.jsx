



const page = ({params}) => {
    // console.log(params)
    // console.log(params.slug)
    
    return (
        <div>
            <h2 className="text-2xl">Hellow how are you</h2>
            <h2 className="text-2xl">{params.slug}</h2>
        </div>
    );
};

export default page;