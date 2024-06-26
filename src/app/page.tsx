import data from "@/data/procedure.json"
import { HoverEffect } from "@/components/ui/card-hover-effect"

const Page = () => {
    return (
        <div className="w-screen flex items-center justify-center flex-col">     
            <div className="text text-3xl mt-5 font-bold">Procedure</div>
            <div className="w-[70%] flex items-center justify-center">
                <HoverEffect items={data}/>               
            </div>
        </div>
    )
}

export default Page