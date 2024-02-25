"use client";
import React, { ReactNode, useRef } from "react";

interface formProps {
  children: ReactNode;
  action: (fornData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
}
const Form = ({ children, action, className, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
