import { UserRoundPlus, ArrowRight } from "lucide-react"
import { Button } from "../../../components/button"

interface InvitePeopleStepProps {
    openGuestModal: () => void
    emailsToInvite: string[]
    openConfirmTripModal: () => void
}

export function InvitePeopleStep({
    openConfirmTripModal,
    openGuestModal,
    emailsToInvite
}:InvitePeopleStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
        <button type="button" onClick={openGuestModal} className='flex items-center gap-2 flex-1'>
            <UserRoundPlus className='size-5 text-zinc-400' />
            {emailsToInvite.length > 0 ? (
                <span className="text-zinc-400 text-left flex-1">{emailsToInvite.length} pessoa(s) convidada(s)</span>
            ) : (
                <span className="text-zinc-400 text-left flex-1">Quem estará na viagem?</span>
            )}

        </button>

        <div className='w-px h-6 bg-zinc-800' />

        <Button onClick={openConfirmTripModal} opcao={"limeButton"} size={"default"} >
            Confirmar Viagem <ArrowRight className='size-5' />
        </Button>
    </div>
    )
}