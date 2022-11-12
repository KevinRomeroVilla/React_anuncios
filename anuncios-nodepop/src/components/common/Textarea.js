import classNames from "classnames";

const Textarea = ({ className, autofocus, ...props }) => {
  return (
    <div className={classNames("textarea", className)}>
      <textarea className='textarea-input' {...props} />
    </div>
  );
};

export default Textarea;
