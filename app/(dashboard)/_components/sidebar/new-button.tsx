"use client"

import {Plus} from "lucide-react"
import { CreateOrganization } from "@clerk/nextjs"

import{
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"
import { Hint } from "@/components/hint";

export const NewButoon = () =>{
    return(
        <Dialog>
            <DialogTrigger>
                <div className="aspect-square">
                    <Hint 
                        label="Create Organization"
                        side="right"
                        align="start"
                        sideOffset={22}>
                        <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100">
                            <Plus className="text-white" />
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
};