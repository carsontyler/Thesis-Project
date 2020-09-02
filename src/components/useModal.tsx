import React, { FC, useState, useRef, useCallback } from "react";
import { Modal, ModalProps } from "reactstrap";
import { ModalHOC } from "./ModalHOC";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => !isOpen && setIsOpen(true), [isOpen]);
  const closeModal = useCallback(() => isOpen && setIsOpen(false), [isOpen]);

  const ControlledModal: FC<ModalProps> = useCallback(
    props => <Modal isOpen={isOpen} {...props} />,
    [isOpen]
  );

  return {
    openModal,
    closeModal,
    Modal: ControlledModal
  };
}
