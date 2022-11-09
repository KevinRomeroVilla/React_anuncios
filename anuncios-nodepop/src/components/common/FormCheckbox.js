import classNames from "classnames";

const FormCheckBox = ({ className, label, ...props }) => {
  return (
    <div className={classNames("formField", className)}>
      <label className='formCheckbox-label'>
        <span>{label}</span>
        <input className='formCheckbox-label' {...props} />
      </label>
    </div>
  );
};

export default FormCheckBox;
