import classNames from "classnames";

const FormFieldNumber = ({ className, label, ...props }) => {
  return (
    <div className={classNames("formField", className)}>
      <label className='formField-label'>
        <span>{label}</span>
        <input className='formField-input' autoComplete='off' {...props} />
      </label>
    </div>
  );
};

export default FormFieldNumber;
