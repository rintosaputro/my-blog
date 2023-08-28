import React, { FC } from "react";

interface RadioProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const Radio: FC<RadioProps> = ({ label, value, onChange, checked = false }) => {
  return (
    <div className="flex items-center">
      <input
        checked={checked}
        id="default-radio-2"
        type="radio"
        value={value}
        onChange={onChange}
      />
      <label className="ml-2 text-sm font-medium">{label}</label>
    </div>
  );
};

export default Radio;
