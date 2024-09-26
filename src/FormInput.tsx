import React, { ChangeEvent } from 'react';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
};

export default FormInput;
