import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { InviteGuestModal } from './invite-guest-modal';
import { ConfirmTripModal } from './confirm-triip-modal';
import { DestinationDateStep } from './steps/destination-date-step';
import { InvitePeopleStep } from './steps/people-invite-step';

export function CreateTripPage() {

    const navigate = useNavigate();

    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
    const [emailsToInvite, setEmailsToInvite] = useState([
        'gabrieljuan@gmail.com',
        'aroba@gmail.com',
    ]);

    function openGuestInput() {
        setIsGuestInputOpen(true);
    }

    function closeGuestInput() {
        setIsGuestInputOpen(false);
    }

    function openGuestModal() {
        setIsGuestModalOpen(true);
    }

    function closeGuestModal() {
        setIsGuestModalOpen(false);
    }

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true);
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false);
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('emailConvidado').toString();

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
        }

        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])

        event.currentTarget.reset();
    }

    function removeEmailToInvite(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove);
        setEmailsToInvite(newEmailList);
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();
        navigate('/trips/123');
    }

  return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center" >
            <div className="max-w-3xl w-full px-6 text-center space-y-10">

                <div className='flex flex-col items-center gap-3'>
                    <img src="/logo.svg" alt="plann.er" />
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                <div className='space-y-4'>

                    <DestinationDateStep 
                    closeGuestInput={closeGuestInput}
                    isGuestInputOpen={isGuestInputOpen}
                    openGuestInput={openGuestInput}
                    />

                    {isGuestInputOpen && (
                        <InvitePeopleStep 
                        emailsToInvite={emailsToInvite}
                        openConfirmTripModal={openConfirmTripModal}
                        openGuestModal={openGuestModal}
                        />
                    )}

                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                    com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">politica de privacidade</a>
                </p>
            </div>

            {isGuestModalOpen && (
                <InviteGuestModal 
                    emailsToInvite={emailsToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    closeGuestModal={closeGuestModal}
                    removeEmailToInvite={removeEmailToInvite}
                />
            )}

            {isConfirmTripModalOpen && (
                <ConfirmTripModal 
                    closeConfirmTripModal={closeConfirmTripModal}
                    createTrip={createTrip}
                />
            )}
        </div>
    )
}