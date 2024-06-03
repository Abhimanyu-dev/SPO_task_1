import { data } from "@/data/faqs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Page = () => {
    return (
        <div className="flex flex-col w-screen items-center justify-center">
            <div className="text-3xl font-bold m-5">Frequently Asked Questions</div>
            <Accordion type="single" collapsible className="w-[70%]">
                {
                    Object.keys(data).map((key, index) => {
                        return(
                        // eslint-disable-next-line react/jsx-key
                        <AccordionItem value={`item-${index+1}`} key={key}>
                            <AccordionTrigger>{key}</AccordionTrigger>
                            <AccordionContent>{data[key as keyof typeof data]}</AccordionContent>
                        </AccordionItem>
                        )
                    }
                    )
                }
            </Accordion>
        </div>
    )
}

export default Page