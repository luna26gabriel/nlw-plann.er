import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
    return (
        <div className="space-y-6">
        <h2 className="text-xl font-semibold">Links Importantes</h2>
        <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <span className="block font-medium tex-zinc-100">Reserva do AirBnb</span>
                    <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200 cursor-pointer">https://www.figma.com/design/gSOo8lqPKkcEpKQYhlbnEb/NLW-Journey-%E2%80%A2-Planejador-de-viagem-(Community)?node-id=7101-1735&node-type=FRAME&t=pmYangrd7okQU1D8-0</a>
                </div>
                <Link2 className="text-zinc-400 size-5 flex-shrink-0" />
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <span className="block font-medium tex-zinc-100">Reserva do AirBnb</span>
                    <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200 cursor-pointer">https://www.figma.com/design/gSOo8lqPKkcEpKQYhlbnEb/NLW-Journey-%E2%80%A2-Planejador-de-viagem-(Community)?node-id=7101-1735&node-type=FRAME&t=pmYangrd7okQU1D8-0</a>
                </div>
                <Link2 className="text-zinc-400 size-5 flex-shrink-0" />
            </div>
        </div>
        <Button opcao={"greyButton"} size={"full"} >
            <Plus className="size-5" /> Cadastrar novo link
        </Button>
    </div>
    )
}