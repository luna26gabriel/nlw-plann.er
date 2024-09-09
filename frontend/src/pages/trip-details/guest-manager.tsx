import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function GuestManager() {
    return (
        <div className="space-y-6">
        <h2 className="text-xl font-semibold">Convidados</h2>
        <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <span className="block font-medium tex-zinc-100">Gabrie Luna</span>
                    <span className="block text-xs text-zinc-400 truncate">
                        gabrielluna2000@gmail.com
                    </span>
                </div>
                <CircleCheck className="text-lime-300 size-5 flex-shrink-0" />
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <span className="block font-medium tex-zinc-100">Ana Clara</span>
                    <span className="block text-xs text-zinc-400 truncate">
                        anaclaralagade@gmail.com
                    </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 flex-shrink-0" />
            </div>
        </div>
        <Button opcao={"greyButton"} size={"full"} >
            <UserCog className="size-5" /> Gerenciar Convidados
        </Button>
    </div>
    )
}