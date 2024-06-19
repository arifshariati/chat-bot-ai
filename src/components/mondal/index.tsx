import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

type ModalProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
  description: string;
  type?: "Integration";
  logo?: string;
};

const Modal = ({ trigger, children, title, description, type, logo }: ModalProps) => {
  switch (type) {
    case "Integration":
      return (
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent>
            <div className="flex justify-center gap-3">
              <div className="w-12 h-12 relative">
                <Image src={`https://ucarecdn.com/a2af0e52-5fd9-4651-ac3c-6df68db74f8f/`} fill alt="Chat Bot AI logo" className="rounded-md" />
              </div>
              <div className="text-gray-400">
                <ArrowLeft size={20} />
                <ArrowRight size={20} />
              </div>
              <div className="w-12 h-12 relative">
                <Image src={`https://ucarecdn.com/${logo}/`} fill alt="Stripe" />
              </div>
            </div>
            <DialogHeader className="flex items-center">
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription className=" text-center">{description}</DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      );
    default:
      return (
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      );
  }
};

export default Modal;
