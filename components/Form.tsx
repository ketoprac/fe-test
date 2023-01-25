import Button from "./Button";
import Input from "./Input";

const Form = (props: any) => {
  const { handleSubmit, searchInputRef } = props;
  return (
    <div className="m-2">
      <form onSubmit={handleSubmit}>
        <Input searchInputRef={searchInputRef} />
        <Button />
      </form>
    </div>
  );
};

export default Form;
