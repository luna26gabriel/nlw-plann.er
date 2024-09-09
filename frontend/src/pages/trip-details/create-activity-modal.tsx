import { X, Tag, Calendar } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
    closeCreateActivityModalOpen: () => void    
}

export function CreateActivityModal({
    closeCreateActivityModalOpen
}:CreateActivityModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[540px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                        <button onClick={closeCreateActivityModalOpen}><X className='size-5 text-zinc-400' /></button>
                    </div>
                    <p className='text-sm text-zinc-400'>Todos convidados podem visualizar as atividades.</p>
                </div>

                <form className='space-y-2'>
                    <div className='h-14 px-2 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <Tag className='size-5 text-zinc-400' />
                        <input
                            type="text"
                            name="name"
                            placeholder="Qual a atividade?"
                            className="bg-transparent placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='h-14 px-2 flex-1 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Calendar className="size-5 text-zinc-400" />
                            <input
                                type="date"
                                name="date"
                                placeholder="20 de Agosto"
                                className="bg-transparent placeholder-zinc-400 outline-none flex-1" />
                        </div>
                    </div>

                    <Button opcao={"limeButton"} size={"full"} >
                        Salvar Atividade
                    </Button>
                </form>

            </div>
        </div>
    )
}