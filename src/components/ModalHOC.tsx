import React, { FC, useState, useRef } from "react";
import { Modal, ModalProps } from "reactstrap";

export const ModalHOC: FC<ModalProps> = props => {
  return <Modal {...props} />;
};
