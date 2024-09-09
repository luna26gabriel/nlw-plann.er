import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./importants-links";
import { GuestManager } from "./guest-manager";
import { Activity } from "./activity";
import { DestinationDatePlace } from "./destination-date-place";
import { Button } from "../../components/button";

export function TripDetailsPage() {

    const [isCreateActivityModalOpen, setSsCreateActivityModalOpen] = useState(false);

    function openCreateActivityModalOpen() {
        setSsCreateActivityModalOpen(true);
    }

    function closeCreateActivityModalOpen() {
        setSsCreateActivityModalOpen(false);
    }
    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <DestinationDatePlace />

            <main className="flex gap-16">
                <div className="flex-1 px-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <Button opcao={"limeButton"} size={"default"} >
                            Cadastrar Atividade <Plus className='size-5' />
                        </Button>
                    </div>

                    <Activity />
                </div>

                <div className="w-80 space-y-6">
                    <ImportantLinks />
                    <div className='w-full h-px bg-zinc-800'></div>
                    <GuestManager />
                </div>
            </main>

            {isCreateActivityModalOpen && (
                <CreateActivityModal 
                    closeCreateActivityModalOpen={closeCreateActivityModalOpen}
                />
            )}
        </div>
    )
}