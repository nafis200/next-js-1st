import Meals from "@/components/Meals";



const page = () => {
    return (
        <div className="p-12">
            <h1>Choose your meals</h1>
            <p>Choose meals of your choice...</p>
            <Meals></Meals>
        </div>
    );
};

export default page;