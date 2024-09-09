import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationDateStepProps {
    isGuestInputOpen: boolean
    closeGuestInput: () => void
    openGuestInput: () => void
}

export function DestinationDateStep({
    closeGuestInput,
    isGuestInputOpen,
    openGuestInput
}: DestinationDateStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-zinc-400' />
                <input disabled={isGuestInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className='flex items-center gap-2'>
                <Calendar className='size-5 text-zinc-400' />
                <input disabled={isGuestInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
            </div>

            <div className='w-px h-6 bg-zinc-800' />
            
            {isGuestInputOpen ?
                (
                <Button onClick={closeGuestInput} opcao={"greyButton"} size={"default"} >
                    Alterar local/data <Settings2 className='size-5' />
                </Button>
                )
                :
                (<Button onClick={openGuestInput} opcao={"limeButton"} size={"default"} >
                     Continuar <ArrowRight className='size-5' />
                </Button>)}
        </div>
    )
}