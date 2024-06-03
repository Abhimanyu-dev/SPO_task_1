'use client'

import { Home, MessageCircleQuestion, Lightbulb,  File, MapPin } from "lucide-react"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

const SideBar = () => {
    const active = usePathname()
    return(
        <TooltipProvider>
            <div className="div fixed z-10 top-[50%] right-[3%] flex flex-col translate-y-[-50%] items-center justify-center">
                <Tooltip>
                    <TooltipTrigger>
                        <Link href='/'>
                            <div className={clsx("p-[1rem] cursor-pointer w-[55px] h-[55px] flex justify-center rounded-[50%] items-center my-[0.7rem] mx-0 text-background bg-foreground ring-secondary hover:ring-4 ", {
                                '!bg-primary !ring-secondary hover:!ring-4 ': active==="/"
                            })}>
                                <Home />
                            </div>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        Home
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href='/insights'>
                            <div className={clsx("p-[1rem] cursor-pointer w-[55px] h-[55px] flex justify-center rounded-[50%] items-center my-[0.7rem] mx-0 text-background bg-foreground ring-secondary hover:ring-4 ", {
                                '!bg-primary !ring-secondary hover:!ring-4 ': active==="/insights"
                            })}>
                                <Lightbulb />
                            </div>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        Insights
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href='/roadmaps'>
                            <div className={clsx("p-[1rem] cursor-pointer w-[55px] h-[55px] flex justify-center rounded-[50%] items-center my-[0.7rem] mx-0 text-background bg-foreground ring-secondary hover:ring-4 ", {
                                '!bg-primary !ring-secondary hover:!ring-4 ': active==="/roadmaps"
                            })}>
                                <MapPin />
                            </div>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        Roadmaps
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href='/resources'>
                            <div className={clsx("p-[1rem] cursor-pointer w-[55px] h-[55px] flex justify-center rounded-[50%] items-center my-[0.7rem] mx-0 text-background bg-foreground ring-secondary hover:ring-4 ", {
                                '!bg-primary !ring-secondary hover:!ring-4 ': active==="/resources"
                            })}>
                                <File />
                            </div>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        Resources
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href='/faqs'>
                            <div className={clsx("p-[1rem] cursor-pointer w-[55px] h-[55px] flex justify-center rounded-[50%] items-center my-[0.7rem] mx-0 text-background bg-foreground ring-secondary hover:ring-4 ", {
                                '!bg-primary !ring-secondary hover:!ring-4 ': active==="/faqs"
                            })}>
                                <Home />
                            </div>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        FAQs
                    </TooltipContent>
                </Tooltip>
                
                
                
            </div>
        </TooltipProvider>
    )
}

export default SideBar