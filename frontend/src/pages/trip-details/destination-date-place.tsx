import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationDatePlace() {
    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
            <MapPin className="size-6 text-zinc-400" />
            <span className="text-zinx-100">Serra Gauxhá, Brazil</span>
        </div>


        <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
                <Calendar className="size-6 text-zinc-400" />
                <span className="text-zinx-100">16 a 20 de Janeiro</span>
            </div>

            <div className='w-px h-6 bg-zinc-800' />

            <Button opcao={"greyButton"} >
                Alterar local/data 
                <Settings2 className='size-5' />
            </Button>
        </div>
    </div>
    )
}