import { Suspense } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Spinner } from "@/shared/ui/Spinner/Spinner";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Spinner />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
